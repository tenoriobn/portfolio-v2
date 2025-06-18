import Image from 'next/image';
import OptionSublist from 'src/components/OptionSublist';
import { ButtonContainer, ButtonDropdown, OptionsWrapper } from 'src/styles';
import { useChangeLanguage } from './useChangeLanguage';
import { slideFadeDown } from 'src/utils';
import { useHeaderStore } from 'src/stores/useHeaderStore';
import { useOptionsToggleStore } from 'src/stores/useOptionsToggleStore';

export default function Language() {
  const { language } = useHeaderStore();
  const setActiveOption = useOptionsToggleStore((s) => s.setActiveOption);
  const activeOption = useOptionsToggleStore((s) => s.activeOption);
  const { changeLanguage } = useChangeLanguage();

  return (
    <OptionsWrapper
      $activeOption={activeOption}
      key={activeOption ? 'openLanguage' : 'closeLanguage'}
      {...slideFadeDown}
    >      
      <OptionSublist onBack={() => setActiveOption('main')}>
        {language.options.map((language) => (
          <ButtonContainer 
            key={language.id}
            onClick={() => (changeLanguage(language.href), setActiveOption(null))}
          >
            <ButtonDropdown>
              <Image src={language.icon.url} alt={language.linkName} width={24} height={24} />
              {language.linkName}
            </ButtonDropdown>
          </ButtonContainer>
        ))}
      </OptionSublist>
    </OptionsWrapper>
  );
}
