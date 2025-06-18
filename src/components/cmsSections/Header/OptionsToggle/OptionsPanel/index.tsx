import OptionList from 'src/components/OptionList';
import { ButtonContainer, ButtonDropdown, OptionsWrapper } from 'src/styles';
import { slideFadeDown } from 'src/utils';
import GlobeIcon from 'public/icons/globe.svg';
import ThemeIcon from 'public/icons/theme.svg';
import DownloadIcon from 'public/icons/download.svg';
import ArrowRightIcon from 'public/icons/arrow-right.svg';
import Language from './Language';
import Theme from './Theme';
import { AnimatePresence } from 'motion/react';
import { useHeaderStore } from 'src/stores/useHeaderStore';
import { useOptionsToggleStore } from 'src/stores/useOptionsToggleStore';

export default function OptionsPanel() {
  const { language, themeOptions, resumeLabel } = useHeaderStore();
  const setActiveOption = useOptionsToggleStore((s) => s.setActiveOption);
  const activeOption = useOptionsToggleStore((s) => s.activeOption);

  const mainOptions = [
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
    },
  ];
  
  return (
    <AnimatePresence mode="wait" initial={false}>   
      {activeOption === 'main' && (
        <OptionsWrapper
          $activeOption={activeOption}
          key={activeOption ? 'openOption' : 'closeOption'}
          {...slideFadeDown}
        >
          <OptionList onClose={() => setActiveOption(null)}>
            {mainOptions.map(({ icon, backIcon, label, onClick }, index) => (
              <ButtonContainer key={index}>
                <ButtonDropdown onClick={onClick}>
                  {icon}
                  {label}
                  {backIcon}
                </ButtonDropdown>
              </ButtonContainer>
            ))}
          </OptionList>
        </OptionsWrapper>
      )}
      
      {activeOption === 'language' && (
        <Language />
      )}

      {activeOption === 'theme' && (
        <Theme />
      )}
    </AnimatePresence>
  );
}
