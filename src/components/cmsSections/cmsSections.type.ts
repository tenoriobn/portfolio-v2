export interface CmsSectionProps {
  year: number;
  [key: string]: unknown;
}

export interface CMSSectionsMap {
  [componentName: string]: React.ComponentType<CmsSectionProps>;
}
