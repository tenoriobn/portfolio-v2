export interface NavbarProps {
  items: Items[];
  isMenuActive: boolean;
  toggleMenu: () => void;
  isMobile: boolean;
}

export interface Items {
  id: string;
  linkName: string;
  href: string;
}