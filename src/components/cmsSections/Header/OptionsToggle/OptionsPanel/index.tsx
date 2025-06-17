import OptionList from 'src/components/OptionList';
import { ButtonContainer, ButtonDropdown, OptionsWrapper } from 'src/styles';
import { slideFadeDown } from 'src/utils';
import { OptionsPanelProps } from './optionsPanel.type';
import GlobeIcon from 'public/icons/globe.svg';
import ThemeIcon from 'public/icons/theme.svg';
import DownloadIcon from 'public/icons/download.svg';
import ArrowRightIcon from 'public/icons/arrow-right.svg';
import Language from './Language';
import Theme from './Theme';
import { AnimatePresence } from 'motion/react';

export default function OptionsPanel({ language, themeOptions, resumeLabel, activeOption, setActiveOption }: OptionsPanelProps) {
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
        <Language languages={language.options} activeOption={activeOption} setActiveOption={setActiveOption} />
      )}

      {activeOption === 'theme' && (
        <Theme themes={themeOptions.theme} activeOption={activeOption} setActiveOption={setActiveOption} />
      )}
    </AnimatePresence>
  );
}
