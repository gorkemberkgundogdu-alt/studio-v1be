export const COLLABORATION_RHYTHM_IDS = ["kickoff", "updates", "review", "feedback", "delivery"] as const;
export const COLLABORATION_AGREEMENT_IDS = ["owner", "visibility", "blockers"] as const;

export type CollaborationRhythmId = (typeof COLLABORATION_RHYTHM_IDS)[number];
export type CollaborationAgreementId = (typeof COLLABORATION_AGREEMENT_IDS)[number];
export type CollaborationIconKind = CollaborationRhythmId | CollaborationAgreementId;

export const isCollaborationRhythmId = (value: string): value is CollaborationRhythmId =>
  COLLABORATION_RHYTHM_IDS.some((id) => id === value);

export const isCollaborationAgreementId = (value: string): value is CollaborationAgreementId =>
  COLLABORATION_AGREEMENT_IDS.some((id) => id === value);
