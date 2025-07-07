export interface AutoScrollCarouselProps {
  icons: {
    id: string;
    linkName: string;
    href: string;
    icon: {
      url: string;
    }
  }[];
  iconSize?: number;
}