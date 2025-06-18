import Image from 'next/image';
import OptionSublist from 'src/components/OptionSublist';
import { ButtonContainer, ButtonDropdown, OptionsWrapper } from 'src/styles';
import { slideFadeDown } from 'src/utils';
import { ThemeProps } from './theme.type';
import { useCMSSection } from 'src/components/cmsSections/useCMSSection.ts';

export default function Theme({ activeOption, setActiveOption }: ThemeProps) {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');

  return (
    <OptionsWrapper
      $activeOption={activeOption}
      {...slideFadeDown}
    >      
      <OptionSublist onBack={() => setActiveOption('main')}>
        {themeOptions.theme.map((theme) => (
          <ButtonContainer key={theme.id}>
            <ButtonDropdown>
              <Image src={theme.icon.url} alt={theme.linkName} width={24} height={24} />
              {theme.linkName}
            </ButtonDropdown>
          </ButtonContainer>
        ))}
      </OptionSublist>
    </OptionsWrapper>
  );
}
