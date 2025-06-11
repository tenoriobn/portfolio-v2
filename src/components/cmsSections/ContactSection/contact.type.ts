export interface ContactSectionBlockRecord extends ContactSectionProps {
  componentName: string;
  id: string;
};

export interface ContactSectionProps {
  title: string;
  description: string;
  socialLink: {
    id: string;
    linkName: string;
    href: string;
    icon: {
      url: string;
    };
    dropdown: {
      id: string;
      text: string;
      icon: {
        url: string;
      };
    }[];
  }[];
};