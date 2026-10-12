export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  href: string;
}

export interface ImpactEstimation {
  bottlesSaved: number;
  plasticKg: number;
  co2SavedKg: number;
  waterSavedL: number;
  artisansSupported: number;
}
