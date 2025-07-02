import { HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

export interface DropdownProps extends  HTMLMotionProps<'div'>{
  onClick: () => void;
  children: ReactNode;
  closeIcon?: boolean;
}