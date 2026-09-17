export type ContentStatus = 'approved' | 'working-source' | 'provisional' | 'awaiting-confirmation';

export const contentStatus: Record<string, { status: ContentStatus; note?: string }> = {
  schoolName: { status: 'approved' },
  boardingOnly: { status: 'working-source' },
  location: { status: 'working-source' },
  academicStages: { status: 'working-source' },
  headteacherWelcome: { status: 'provisional', note: 'Editorial working copy; not a direct quotation.' },
  currentResults: { status: 'awaiting-confirmation' },
  aLevelCombinations: { status: 'awaiting-confirmation' },
  officeHours: { status: 'awaiting-confirmation' },
  sportsHonours: { status: 'awaiting-confirmation' },
  missionValues: { status: 'working-source' },
  leadershipDirectory: { status: 'awaiting-confirmation' },
  aLevelSubjects: { status: 'working-source' },
};
