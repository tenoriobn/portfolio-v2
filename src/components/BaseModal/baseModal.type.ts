export interface BaseModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: string;
  isGalleryModal?: boolean;
}