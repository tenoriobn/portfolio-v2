export interface CMSSectionRenderProps {
  pageName: string;
  year: number;
}

export interface CMSSectionData {
  id: string;
  componentName: CMSComponentName;
}

export type CMSComponentName = 'HeaderBlockRecord' | 'HeroSectionBlockRecord';