/**
 * v1ben. — maskotun tüm "look" varyantlarının tek kayıt yeri.
 *
 * Model tek (bkz robot-mascot.ts, prosedürel three.js); her sayfa aynı karakteri
 * farklı kamera açısı / bakış yönü / aksesuarla giydirir. Yeni bir sayfaya maskot
 * koyarken buraya bir look ekle, RobotMascot'a `look="anahtar"` geçir.
 *
 * Konumlar:
 *  - classic → anasayfa hero (imleci takip eden tanıdık hal)
 *  - cape    → /services/ (pelerinli kahraman, alttan kamera)
 *  - curious → /about/ (3/4 sol kamera, kameraya dönük merak)
 *  - reader  → /blog/ (hafif üstten kamera, okumaya dalmış, gözler aşağıda)
 *  - scout   → /pricing/ (sağdan kamera, başlığa/içeriğe bakar)
 *  - greeter → /contact/ (yakın plan, tam imleç takibi, sıcak karşılama)
 */
export interface RobotLook {
  /** Kamera pozisyonu (x, y, z). */
  camera: [number, number, number];
  /** Kameranın baktığı nokta. */
  lookAt: [number, number, number];
  fov: number;
  /** Kafanın istirahat yönü (radyan) — imleç takibi bunun üzerine eklenir. */
  gaze: { x: number; y: number };
  /** Gövdenin sabit y dönüşü (radyan). */
  yaw: number;
  /** Gövdenin z ekseni yatıklığı (radyan) — sevimli kafa/gövde eğimi. */
  tilt: number;
  /** 0..1 — imleç takip gücü (0 = sabit bakış, 1 = tam takip). */
  follow: number;
  /** Göz/ağız ofseti (yüz dokusu pikseli) — bakışın yüzdeki karşılığı. */
  eye: { dx: number; dy: number };
  /** Pelerin var mı? */
  cape: boolean;
  capeColor: number;
}

export const ROBOT_LOOKS: Record<string, RobotLook> = {
  classic: {
    camera: [0, 0.2, 9.2],
    lookAt: [0, 0.1, 0],
    fov: 32,
    gaze: { x: 0, y: 0 },
    yaw: 0,
    tilt: 0,
    follow: 1,
    eye: { dx: 0, dy: 0 },
    cape: false,
    capeColor: 0x50249b,
  },
  cape: {
    // Kahraman: alttan bakan kamera, hafif yana dönük gövde, rüzgârda pelerin
    camera: [0.5, -1.4, 8.8],
    lookAt: [0, 0.35, 0],
    fov: 32,
    gaze: { x: -0.08, y: 0.12 },
    yaw: 0.1,
    tilt: -0.03,
    follow: 0.35,
    eye: { dx: 6, dy: -8 },
    cape: true,
    capeColor: 0x50249b,
  },
  curious: {
    // 3/4 sol kamera; kafa kameraya döner, gözler kamerada
    camera: [-3.1, 0.8, 8.2],
    lookAt: [0, 0.15, 0],
    fov: 32,
    gaze: { x: 0.02, y: -0.34 },
    yaw: -0.12,
    tilt: 0,
    follow: 0.3,
    eye: { dx: -10, dy: 0 },
    cape: false,
    capeColor: 0x50249b,
  },
  reader: {
    // Hafif üstten kamera; kafa öne eğik, gözler aşağıda — okumaya dalmış
    camera: [1.9, 1.5, 8.3],
    lookAt: [0, 0.2, 0],
    fov: 32,
    gaze: { x: 0.3, y: -0.15 },
    yaw: -0.06,
    tilt: 0,
    follow: 0.1,
    eye: { dx: -6, dy: 12 },
    cape: false,
    capeColor: 0x50249b,
  },
  scout: {
    // Sağdan kamera; sayfanın sağ üstünde durur, soldaki içeriğe bakar
    camera: [3.3, 0.5, 7.9],
    lookAt: [0, 0.1, 0],
    fov: 32,
    gaze: { x: 0.05, y: -0.42 },
    yaw: -0.08,
    tilt: 0,
    follow: 0.2,
    eye: { dx: -16, dy: 4 },
    cape: false,
    capeColor: 0x50249b,
  },
  greeter: {
    // Yakın plan + sevimli kafa eğimi; imleci tam güçle takip eder
    camera: [0, 0.4, 7.3],
    lookAt: [0, 0.15, 0],
    fov: 31,
    gaze: { x: 0, y: 0 },
    yaw: 0,
    tilt: 0.05,
    follow: 1,
    eye: { dx: 0, dy: 0 },
    cape: false,
    capeColor: 0x50249b,
  },
};
