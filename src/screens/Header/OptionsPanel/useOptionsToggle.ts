import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isActiveOptionState } from 'src/lib';
import Cookies from 'js-cookie';

function useOptionsToggle() {
  const [isActiveOption, setActiveOption] = useRecoilState(isActiveOptionState);
  const [disablePulse, setDisablePulse] = useState(true);

  useEffect(() => {
    const alreadyClicked = Cookies.get('optionsClicked') === 'true';
    setDisablePulse(alreadyClicked);
  }, []);

  const toggleOptions = () => {
    setActiveOption(prev => (prev === null ? 'main' : null));
    Cookies.set('optionsClicked', 'true', { expires: 365 });
    setDisablePulse(true);
  };
  
  const closeOptions = () => setActiveOption(null);

  return {
    isActiveOption,
    setActiveOption,
    toggleOptions,
    closeOptions,
    disablePulse
  };
}

export default useOptionsToggle;