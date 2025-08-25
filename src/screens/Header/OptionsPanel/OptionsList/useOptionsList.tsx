import { useCMSSection } from 'src/hooks';
import useOptionsToggle from '../useOptionsToggle';
import GlobeIcon from 'public/icons/globe.svg';
import ThemeIcon from 'public/icons/theme.svg';
import DownloadIcon from 'public/icons/download.svg';
import ArrowRightIcon from 'public/icons/arrow-right.svg';

function useOptionsList() {
  const { language, themeOptions, resumeLabel } = useCMSSection('HeaderBlockRecord');
  const { isActiveOption, setActiveOption, closeOptions } = useOptionsToggle();

  const options = [
    {
      icon: <GlobeIcon />,
      backIcon: <ArrowRightIcon />,
      label: language.title,
      onClick: () => setActiveOption('language'),
    },
    {
      icon: <ThemeIcon />,
      backIcon: <ArrowRightIcon />,
      label: themeOptions.title,
      onClick: () => setActiveOption('theme'),
    },
    {
      icon: <DownloadIcon />,
      label: resumeLabel.linkName,
      onClick: () => {
        window.open(resumeLabel.href, '_blank', 'noopener,noreferrer');
        setActiveOption(null);
      },
    },
  ];

  return {
    options,
    isActiveOption,
    setActiveOption,
    closeOptions
  };
}

export default useOptionsList;