import { useRecoilState } from 'recoil';
import { isActiveOptionState } from 'src/lib';

function useOptionsToggle() {
  const [isActiveOption, setActiveOption] = useRecoilState(isActiveOptionState);

  const toggleOptions = () => setActiveOption(prev => (prev === null ? 'main' : null));
  const closeOptions = () => setActiveOption(null);

  return {
    isActiveOption,
    setActiveOption,
    toggleOptions,
    closeOptions,
  };
}

export default useOptionsToggle;