import type { CategoryChipProps } from "./category-chip.type";

export const CategoryChip = <T extends object>({ component: Component, componentProps }: CategoryChipProps<T>) => {
  return (
    <div className="bg-gray-800 px-5 py-2 text-sm rounded-full flex items-center gap-2">
      {Component && <Component {...componentProps ?? Object({})}></Component>}
      <span>Frontend</span>
    </div>
  );
};

   