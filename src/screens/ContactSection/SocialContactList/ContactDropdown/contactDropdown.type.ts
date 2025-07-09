export interface ContactDropdownProps {
  dropdown: ContactDropdownContent[];
  linkName: string;
};

export interface ContactDropdownContent {
  id: string;
  text: string;
  href: string;
  iscopy: boolean;
  icon: {
    url: string;
  };
}