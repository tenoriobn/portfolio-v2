import Image from 'next/image';
import OptionSublist from 'src/components/OptionSublist';
import { ButtonContainer, ButtonDropdown, OptionsWrapper } from 'src/styles';
import { slideFadeDown } from 'src/utils';
import { useHeaderStore } from 'src/stores/useHeaderStore';
import { useOptionsToggleStore } from 'src/stores/useOptionsToggleStore';

export default function Theme() {
  const { themeOptions } = useHeaderStore();
  const setActiveOption = useOptionsToggleStore((s) => s.setActiveOption);
  const activeOption = useOptionsToggleStore((s) => s.activeOption);

  return (
    <OptionsWrapper
      $activeOption={activeOption}
      key={activeOption ? 'openTheme' : 'closeTheme'}
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
