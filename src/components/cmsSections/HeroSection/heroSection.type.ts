export interface HeroSectionBlockRecord extends HeroSectionProps{
  id: string;
  componentName: string;
};

export interface HeroSectionProps {
  avatar: {
    url: string;
  };
  jobTitle: string;
  highlightFixedText: string;
  highlightRotatingTexts: {
    id: string;
    text: string;
  }[];
  resumeLabel: {
    id: string;
    linkName: string;
    href: string;
  };
};