import { ReactNode } from 'react';

export interface ModalWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void; 
  maxWidth?: string;
}