import { RefObject, useEffect } from 'react';

export function useClickOutside(ref: RefObject<HTMLElement | null>, onClickOutside: () => void) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!ref.current || ref.current.contains(target)) return;

      const overlay = ref.current.parentElement;
      if (target === overlay) {
        const scrollbarWidth = overlay.offsetWidth - overlay.clientWidth;
        const isScrollbarClick = event.clientX >= overlay.getBoundingClientRect().right - scrollbarWidth;
        
        if (isScrollbarClick) return;
      }
      
      onClickOutside();
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, onClickOutside]);
}