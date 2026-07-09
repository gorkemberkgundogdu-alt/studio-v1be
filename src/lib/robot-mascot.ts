/**
 * v1ben. — v1be'nin robot maskotu. three.js ile tamamen prosedürel model
 * (GLB indirmez, ekstra ağ isteği yok). Referans: "teal stylized robot" —
 * kutu kafa, ekran yüz, kulak kanatları, 4 mekanik bacak, anten + kamera pod'u.
 *
 * Aynı karakter sitede farklı "look"larla çoğalır: kamera açısı, bakış yönü,
 * pelerin vb. varyantlar robot-looks.ts'te saklanır; stage'in
 * data-robot-look özniteliği hangi look'un kurulacağını seçer.
 *
 * Davranış: sayfa açılınca gözlerini açar ve gülümser, kafası imleci takip eder
 * (look.follow gücünde), arada göz kırpar. Touch cihazlarda kendi kendine bakınır.
 *
 * SEO/GEO koruması: tamamen dekoratif (container aria-hidden), dinamik import ile
 * ayrı chunk olarak boşta (idle) yüklenir; SSR HTML'e ve LCP'ye dokunmaz.
 * prefers-reduced-motion'da tek statik kare render edilir.
 */
import { ROBOT_LOOKS, type RobotLook } from "./robot-looks";

/**
 * Ana thread'e nazikçe kontrolü geri verir. Aşağıdaki senkron model inşası
 * (onlarca Mesh/Geometry çağrısı) tek seferde çalışırsa throttled mobilde
 * 100-270ms'lik "long task"lara bölünüyordu (Lighthouse TBT'yi vuruyordu).
 * Görsel sonuç birebir aynı kalır — yalnızca inşa birkaç kareye yayılır.
 */
const yieldToMain = (): Promise<void> =>
  new Promise((resolve) => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => resolve(), { timeout: 50 });
    } else {
      setTimeout(resolve, 0);
    }
  });

export async function mountRobot(stage: HTMLElement): Promise<void> {
  const canvas = stage.querySelector("canvas");
  if (!canvas) return;

  const look: RobotLook = ROBOT_LOOKS[stage.dataset.robotLook ?? "classic"] ?? ROBOT_LOOKS.classic;

  const THREE = await import("three");
  const { RoundedBoxGeometry } = await import(
    "three/examples/jsm/geometries/RoundedBoxGeometry.js"
  );

  let renderer: InstanceType<typeof THREE.WebGLRenderer>;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch {
    return; // WebGL yok — arka plandaki parıltı tek başına yeterli
  }
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(look.fov, 1, 0.1, 50);
  camera.position.set(...look.camera);
  camera.lookAt(...look.lookAt);

  // Işıklar: krem gökyüzü + mor zemin sekmesi, beyaz key, mor rim, lime dolgu
  scene.add(new THREE.HemisphereLight(0xfff8e8, 0x36186b, 1.15));
  const key = new THREE.DirectionalLight(0xffffff, 1.7);
  key.position.set(2.5, 4, 3);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x7c4dff, 1.1);
  rim.position.set(-3, 1.5, -2.5);
  scene.add(rim);
  const fill = new THREE.PointLight(0xd1f300, 0.35, 10);
  fill.position.set(0.8, -1.6, 2.4);
  scene.add(fill);

  // Malzemeler — referans robotun paleti + marka lime'ı lens vurgusu olarak
  const teal = new THREE.MeshStandardMaterial({ color: 0x63aca6, roughness: 0.55, metalness: 0.12 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2e3237, roughness: 0.45, metalness: 0.55 });
  const silver = new THREE.MeshStandardMaterial({ color: 0xb9c1c6, roughness: 0.35, metalness: 0.7 });
  const lens = new THREE.MeshStandardMaterial({
    color: 0xd1f300,
    emissive: 0xd1f300,
    emissiveIntensity: 0.9,
    roughness: 0.3,
  });

  // ---- Yüz: canvas doku (ekran kendinden aydınlık olduğu için MeshBasic) ----
  const face = document.createElement("canvas");
  face.width = 512;
  face.height = 352;
  const fctx = face.getContext("2d");
  if (!fctx) return;
  const faceTex = new THREE.CanvasTexture(face);
  faceTex.colorSpace = THREE.SRGBColorSpace;
  const screenMat = new THREE.MeshBasicMaterial({ map: faceTex });

  function drawFace(open: number, smile: number, dx: number, dy: number) {
    if (!fctx) return;
    fctx.fillStyle = "#dff0c4";
    fctx.fillRect(0, 0, 512, 352);
    fctx.strokeStyle = "rgba(47, 64, 44, 0.12)";
    fctx.lineWidth = 20;
    fctx.strokeRect(10, 10, 492, 332);

    fctx.strokeStyle = "#37503a";
    fctx.lineCap = "round";
    fctx.lineWidth = 30;
    const ey = 142 + dy;
    for (const ex of [156 + dx, 356 + dx]) {
      fctx.beginPath();
      fctx.moveTo(ex - 44, ey + 18 * open);
      fctx.quadraticCurveTo(ex, ey - 44 * open, ex + 44, ey + 18 * open);
      fctx.stroke();
    }
    const mx = 256 + dx * 0.7;
    const my = 228 + dy * 0.6;
    fctx.beginPath();
    fctx.moveTo(mx - 62, my);
    fctx.quadraticCurveTo(mx, my + 12 + smile * 42, mx + 62, my);
    fctx.stroke();
    faceTex.needsUpdate = true;
  }

  await yieldToMain();

  // ---- Gövde ----
  const robot = new THREE.Group();
  robot.position.y = -0.2;
  robot.rotation.z = look.tilt;
  scene.add(robot);

  /** İki nokta arasına silindir "uzuv" yerleştirir (bacaklar için). */
  function limb(
    a: InstanceType<typeof THREE.Vector3>,
    b: InstanceType<typeof THREE.Vector3>,
    r1: number,
    r2: number,
    mat: InstanceType<typeof THREE.MeshStandardMaterial>,
  ) {
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, len, 20), mat);
    mesh.position.copy(a).addScaledVector(dir, 0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    return mesh;
  }

  // Kafa (referansta kafa = gövde)
  const head = new THREE.Group();
  head.position.y = 0.55;
  robot.add(head);

  head.add(new THREE.Mesh(new RoundedBoxGeometry(2.3, 1.95, 2.0, 5, 0.34), teal));

  const bezel = new THREE.Mesh(new RoundedBoxGeometry(1.62, 1.18, 0.3, 4, 0.12), dark);
  bezel.position.set(0, -0.16, 0.95);
  head.add(bezel);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.9), screenMat);
  screen.position.set(0, -0.16, 1.115);
  head.add(screen);

  // Ekran üstü cıvatalar + alın çizgileri
  for (const x of [-0.38, 0.38]) {
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.1, 16), dark);
    bolt.rotation.x = Math.PI / 2;
    bolt.position.set(x, 0.62, 0.98);
    head.add(bolt);
  }
  for (const x of [-0.1, 0.1]) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.3, 0.06), silver);
    stripe.rotation.z = -0.35;
    stripe.position.set(x, 0.86, 0.99);
    head.add(stripe);
  }

  // Kulak kanatları
  function ear(side: 1 | -1) {
    const g = new THREE.Group();
    g.position.set(0.72 * side, 0.95, -0.15);
    g.rotation.z = -0.38 * side;
    const fin = new THREE.Mesh(new RoundedBoxGeometry(0.4, 1.5, 0.78, 4, 0.16), teal);
    fin.position.y = 0.5;
    g.add(fin);
    const tip = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.6, 0.8, 4, 0.16), dark);
    tip.position.y = 1.1;
    g.add(tip);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.06, 0.81), silver);
    stripe.position.y = 0.78;
    g.add(stripe);
    return g;
  }
  const earR = ear(1);
  const earL = ear(-1);
  head.add(earR, earL);

  // Anten + kamera pod'u (sol yanak)
  const pod = new THREE.Group();
  pod.position.set(-1.3, 0.35, 0.25);
  head.add(pod);
  const podArm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.3, 12), dark);
  podArm.rotation.z = Math.PI / 2;
  podArm.position.x = 0.16;
  pod.add(podArm);
  const podBox = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.32, 0.38, 3, 0.08), dark);
  podBox.position.x = -0.05;
  pod.add(podBox);
  const podLens = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 16), lens);
  podLens.rotation.x = Math.PI / 2;
  podLens.position.set(-0.05, 0.02, 0.2);
  pod.add(podLens);
  const podSub = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 10), dark);
  podSub.position.set(-0.05, -0.24, 0.12);
  pod.add(podSub);
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.95, 8), dark);
  antenna.position.set(-0.05, 0.75, -0.06);
  pod.add(antenna);

  await yieldToMain();

  // Kalça kümesi + 4 bacak
  const pelvis = new THREE.Mesh(new THREE.SphereGeometry(0.42, 20, 16), dark);
  pelvis.position.y = -0.75;
  robot.add(pelvis);
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.44, 0.35, 16), dark);
  collar.position.y = -0.5;
  robot.add(collar);

  await yieldToMain();

  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + (i * Math.PI) / 2;
    const dx = Math.cos(a);
    const dz = Math.sin(a);
    const hipP = new THREE.Vector3(dx * 0.34, -0.72, dz * 0.34);
    const knee = new THREE.Vector3(dx * 0.92, -1.02, dz * 0.92);
    const foot = new THREE.Vector3(dx * 1.26, -2.02, dz * 1.26);
    robot.add(limb(hipP, knee, 0.24, 0.28, teal));
    const kneeBall = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 12), dark);
    kneeBall.position.copy(knee);
    robot.add(kneeBall);
    robot.add(limb(knee, foot, 0.26, 0.15, teal));
    const toe = limb(
      new THREE.Vector3().lerpVectors(knee, foot, 0.85),
      foot.clone().add(new THREE.Vector3(dx * 0.05, -0.05, dz * 0.05)),
      0.16,
      0.11,
      dark,
    );
    robot.add(toe);
  }

  await yieldToMain();

  // ---- Pelerin (look.cape) — sırta asılı, rüzgârda dalgalanan bükülmüş düzlem ----
  let capeUpdate: ((t: number) => void) | null = null;
  if (look.cape) {
    const capeGeo = new THREE.PlaneGeometry(2.35, 2.75, 12, 10);
    const capeMat = new THREE.MeshStandardMaterial({
      color: look.capeColor,
      roughness: 0.75,
      metalness: 0.08,
      side: THREE.DoubleSide,
    });
    const cape = new THREE.Mesh(capeGeo, capeMat);
    const rig = new THREE.Group();
    rig.position.set(0, 0.78, -1.06); // omuz hizası, sırt
    rig.rotation.x = 0.14; // hafif geriye savrulma
    cape.position.y = -2.75 / 2 + 0.05; // üst kenar omuzda asılı kalsın
    rig.add(cape);
    head.add(rig);

    // Omuz perçinleri — pelerin gövdeye "tutturulmuş" okunsun
    for (const x of [-0.98, 0.98]) {
      const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), silver);
      rivet.position.set(x, 0.82, -0.92);
      head.add(rivet);
    }

    const pos = capeGeo.attributes.position;
    const base = Float32Array.from(pos.array);
    capeUpdate = (t: number) => {
      for (let i = 0; i < pos.count; i++) {
        const bx = base[i * 3];
        const by = base[i * 3 + 1];
        const drop = (2.75 / 2 - by) / 2.75; // 0 = omuz, 1 = etek
        const wave = Math.sin(bx * 2.1 + drop * 3 + t * 1.8) * 0.09 * drop;
        pos.setX(i, bx * (1 + drop * 0.22)); // etek genişler
        pos.setZ(i, -drop * drop * 0.5 + wave); // geriye doğru savrulur
      }
      pos.needsUpdate = true;
      capeGeo.computeVertexNormals();
    };
  }

  // ---- Boyutlandırma ----
  function resize() {
    const w = Math.max(1, stage.clientWidth);
    renderer.setSize(w, w, false);
  }
  resize();
  new ResizeObserver(() => {
    resize();
    renderer.render(scene, camera);
  }).observe(stage);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    // Statik kare: uyanık ve gülümsüyor, look'un pozunda, takip yok
    head.rotation.y = look.gaze.y;
    head.rotation.x = look.gaze.x;
    robot.rotation.y = look.yaw;
    capeUpdate?.(0);
    drawFace(1, 1, look.eye.dx, look.eye.dy);
    renderer.render(scene, camera);
    stage.classList.add("is-live");
    return;
  }

  // ---- Animasyon durumu ----
  const pointer = { tx: 0, ty: 0, x: 0, y: 0, active: false };
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener(
      "pointermove",
      (e) => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
        pointer.active = true;
      },
      { passive: true },
    );
  }

  const wakeAt = performance.now() + 550;
  let blinkAt = -1;
  let lastFaceKey = "";

  function updateFace(open: number, smile: number, dx: number, dy: number) {
    const key = `${open.toFixed(2)}|${smile.toFixed(2)}|${dx.toFixed(0)}|${dy.toFixed(0)}`;
    if (key === lastFaceKey) return;
    lastFaceKey = key;
    drawFace(open, smile, dx, dy);
  }

  let raf = 0;
  let running = false;
  const clock = new THREE.Clock();

  function frame() {
    raf = requestAnimationFrame(frame);
    const t = clock.getElapsedTime();
    const now = performance.now();

    // Yüz: uyan → gülümse → arada göz kırp
    let open = 1;
    let smile = 1;
    if (now < wakeAt) {
      open = 0.05;
      smile = 0.15;
    } else {
      const p = Math.min(1, (now - wakeAt) / 850);
      const e = 1 - Math.pow(1 - p, 3);
      open = 0.05 + 0.95 * e;
      smile = 0.15 + 0.85 * e;
      if (p >= 1) {
        if (blinkAt < 0) blinkAt = now + 2400 + Math.random() * 3400;
        const bp = (now - blinkAt) / 240;
        if (bp >= 0 && bp < 1) open *= Math.abs(1 - 2 * bp);
        else if (bp >= 1) blinkAt = now + 2400 + Math.random() * 3800;
      }
    }

    // İmleç takibi (touch'ta kendi kendine bakınır)
    if (!pointer.active) {
      pointer.tx = Math.sin(t * 0.4) * 0.5;
      pointer.ty = Math.sin(t * 0.27) * 0.25;
    }
    pointer.x += (pointer.tx - pointer.x) * 0.07;
    pointer.y += (pointer.ty - pointer.y) * 0.07;

    head.rotation.y = look.gaze.y + pointer.x * 0.5 * look.follow + Math.sin(t * 0.6) * 0.02;
    head.rotation.x = look.gaze.x + pointer.y * 0.28 * look.follow + Math.sin(t * 0.8) * 0.015;
    head.position.y = 0.55 + Math.sin(t * 1.4) * 0.04;
    robot.rotation.y = look.yaw + pointer.x * 0.16 * look.follow;
    earR.rotation.z = -0.38 + Math.sin(t * 1.3) * 0.03;
    earL.rotation.z = 0.38 + Math.sin(t * 1.3 + 1) * 0.03;
    capeUpdate?.(t);

    updateFace(
      open,
      smile,
      look.eye.dx + pointer.x * 26 * look.follow,
      look.eye.dy + pointer.y * 12 * look.follow,
    );
    renderer.render(scene, camera);
  }

  function start() {
    if (running) return;
    running = true;
    clock.start();
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  let inView = true;
  new IntersectionObserver((entries) => {
    inView = entries.some((e) => e.isIntersecting);
    if (inView && !document.hidden) start();
    else stop();
  }).observe(stage);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (inView) start();
  });

  start();
  stage.classList.add("is-live");
}
