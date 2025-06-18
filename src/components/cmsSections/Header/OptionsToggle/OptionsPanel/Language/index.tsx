import Image from 'next/image';
import OptionSublist from 'src/components/OptionSublist';
import { ButtonContainer, ButtonDropdown, OptionsWrapper } from 'src/styles';
import { LanguageProps } from './language.type';
import { useChangeLanguage } from './useChangeLanguage';
import { slideFadeDown } from 'src/utils';
import { useCMSSection } from 'src/components/cmsSections/useCMSSection.ts';

export default function Language({ activeOption, setActiveOption }: LanguageProps) {
  const { language } = useCMSSection('HeaderBlockRecord');
  const { changeLanguage } = useChangeLanguage();

  return (
    <OptionsWrapper
      $activeOption={activeOption}
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
