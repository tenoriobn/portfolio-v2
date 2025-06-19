export interface AboutMeSectionBlockRecord extends AboutMeSectionProps {
  componentName: string;
  id: string;
};

export interface AboutMeSectionProps {
  title: string;
  socialLink: {
    id: string;
    linkName: string;
    href: string;
    icon: {
      url: string;
    }
  }[];
  description: {
    value: string;
  };
};