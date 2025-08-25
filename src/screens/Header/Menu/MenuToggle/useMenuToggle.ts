import { useRecoilState } from 'recoil';
import { isMenuActiveState } from 'src/lib';

function useMenuToggle() {
  const [isMenuActive, setIsMenuActive] = useRecoilState(isMenuActiveState);

  const toggleMenu = () => setIsMenuActive((prev) => !prev);
  const closeMenu = () => setIsMenuActive(false);

  return {
    isMenuActive,
    toggleMenu,
    closeMenu,
  };
}

export default useMenuToggle;