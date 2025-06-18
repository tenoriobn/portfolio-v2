import Image from 'next/image';
import OptionSublist from 'src/components/OptionSublist';
import { ButtonContainer, ButtonDropdown, OptionsWrapper } from 'src/styles';
import { slideFadeDown } from 'src/utils';
import { ThemeProps } from './theme.type';

export default function Theme({ themes, activeOption, setActiveOption }: ThemeProps) {
  return (
    <OptionsWrapper
      $activeOption={activeOption}
      key={activeOption ? 'openTheme' : 'closeTheme'}
      {...slideFadeDown}
    >      
      <OptionSublist onBack={() => setActiveOption('main')}>
        {themes.map((theme) => (
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
