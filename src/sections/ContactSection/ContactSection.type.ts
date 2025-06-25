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
    icon: {
      url: string;
    };
    dropdown: {
      id: string;
      text: string;
      href: string;
      iscopy: boolean;
      icon: {
        url: string;
      };
    }[];
  }[];
};