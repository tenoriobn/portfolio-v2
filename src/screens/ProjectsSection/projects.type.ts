export interface ProjectsSectionBlockRecord extends ProjectsSectionProps {
  componentName: string;
  id: string;
};

export interface ProjectsSectionProps {
  title: string;
  description: string;
  projects: ProjectItem[];
};

export interface ProjectModalProps {
  project: ProjectItem;
}

export interface ProjectItem extends ProjectLinks {
  id: string;
  modalButtonLabel: string;
  projectTitle: string;
  projectDescription: string;
  projectGallery: { 
    id: string;
    url: string 
  }[]; 
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
}

export interface ProjectLinks {
  projectLinks: {
    id: string;
    linkName: string;
    href: string;
    icon: {
      url: string;
    }
  }[];
}