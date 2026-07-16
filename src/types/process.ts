export const PROCESS_STAGE_IDS = ["diagnose", "design", "build", "validate"] as const;

export type ProcessStageId = (typeof PROCESS_STAGE_IDS)[number];

export const isProcessStageId = (value: string): value is ProcessStageId =>
  PROCESS_STAGE_IDS.some((stageId) => stageId === value);
