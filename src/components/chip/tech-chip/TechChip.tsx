import type { TechChipProps } from "./tech-chip.type";

export function TechChip({ label = "" }: TechChipProps) {
  return <div className="rounded-full bg-zinc-700 px-4 py-2 text-xs">{label}</div>;
}
