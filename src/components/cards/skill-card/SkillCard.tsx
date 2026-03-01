import type { SkillCardProps } from "./skill-card.type";

export function SkillCard ({ label = "Tech", iconComponent}: SkillCardProps) {
  return (
    <div className="cursor-pointer transition-shadow hover:shadow-[0_0_0.4rem_0.2rem] shadow-zinc-600/85 bg-zinc-800 flex justify-center items-center rounded-md min-h-12 text-sm gap-2">
      {iconComponent}
      <span>{label}</span>
    </div>
  );
}
