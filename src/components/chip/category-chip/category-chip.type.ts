import type { ComponentType } from "react";

export interface CategoryChipProps<T> {
  component?: ComponentType<T>
  componentProps?: T
  label: string
}