import { useState } from 'react';
import { useWindowSize } from 'src/hooks/useWindowSize';

function useResponsiveMenu() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isMobile = useWindowSize();

  return {
    isMenuActive,
    toggleMenu: () => setIsMenuActive(prev => !prev),
    isMobile
  };
}

export default useResponsiveMenu;