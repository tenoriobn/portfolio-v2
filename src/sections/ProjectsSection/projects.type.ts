export interface ProjectsSectionBlockRecord extends ProjectsSectionProps {
  componentName: string;
  id: string;
};

export interface ProjectsSectionProps {
  title: string;
  description: string;
  projects: {
    id: string;
    modalButtonLabel: string;
    projectTitle: string;
    projectDescription: string;
    appliedSolutions: {
      title: string;
      solution: {
        id: string;
        solution: string;
      }[];
    };
    challenges: {
      title: string
      challenge: {
        id: string;
        solution: string;
      }[];
    };
    skills: {
      title: string;
      skill: {
        id: string;
        linkName: string;
        href: string;
        icon: {
          url: string;
        }
      }[];
    }
    projectLinks: {
      demonstration: {
        id: string;
        linkName: string;
        href: string;
        icon: {
          url: string;
        }
      };
      sourceCode: {
        id: string;
        linkName: string;
        href: string;
        icon: {
          url: string;
        };
      };
    };
  }[];
};