export const SkillTypes = {
  Frontend: 1,
  Backend: 2,
  "DevOps - Cloud & Deployment": 3,
  Databases: 4,
  "Blockchain & Web3": 5,
  "Programming Languages": 6,
} as const;

export type SkillType = typeof SkillTypes[keyof typeof SkillTypes]

/*
  1: "Frontend",
  2: "Backend",
  3: "DevOps - Cloud & Deployment",
  4: "Databases",
  5: "Blockchain & Web3",
  6: "Programming Languages"
*/

export interface SkillFilter {
  skill_type?: SkillType
}
