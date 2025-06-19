export interface SkillsSectionBlockRecord extends SkillsSectionProps {
  componentName: string;
  id: string;
}

export interface SkillsSectionProps {
  title: string;
  description: string;
  skills: {
    id: string;
    linkName: string;
    href: string;
    icon: {
      url: string;
    }
  }[];
}