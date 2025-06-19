export interface ExperienceSectionBlockRecord extends ExperienceSectionProps {
  componentName: string;
  id: string;
};

export interface ExperienceSectionProps {
  title: string;
  description: string;
  experienceContent: {
    experiencies: {
      id: string;
      companyName: string;
      roleArea: string;
      period: string;
      jobDescription: string;
      companyLogo: {
        url: string;
      };
    }[];
  };
};