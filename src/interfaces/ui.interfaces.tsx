import { ReactNode } from "react";

export interface NavMenuItem {
  label: string;
  url: string;
}

export interface ChipInterface {
  label: string;
  icon: ReactNode;
}

export interface ExperienceItemInterface {
  employerName: string;
  location: string;
  role: string;
  dates: string;
}