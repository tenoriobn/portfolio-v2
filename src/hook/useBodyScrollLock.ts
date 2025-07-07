import { useEffect } from 'react';

export function useBodyScrollLock(shouldLockScroll: boolean) {
  useEffect(() => {
    document.body.style.overflow = shouldLockScroll ? 'hidden' : '';
    
    return () => { document.body.style.overflow = ''; };
  }, [shouldLockScroll]);
}
