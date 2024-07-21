import { ReactNode } from "react";

export interface NavMenuItem {
  label: string;
  url: string;
}

export interface ChipInterface {
  label: string;
  icon: ReactNode;
}
