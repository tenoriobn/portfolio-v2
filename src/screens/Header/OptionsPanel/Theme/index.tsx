import Image from 'next/image';
import { LargeBorderButton, OptionButton } from 'src/styles';
import { useCMSSection } from 'src/hooks';
import useOptionsToggle from '../useOptionsToggle';
import CheckIcon from 'public/icons/check.svg';
import { useThemeToggle } from '../../ThemeToggle/useThemeToggle';
import { scaleFade } from 'src/utils';
import Dropdown from 'src/components/Dropdown';

export default function Theme() {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');
  const { setActiveOption, closeOptions } = useOptionsToggle();
  const { isDark, setTheme } = useThemeToggle();
  const resolvedTheme = isDark ? 'dark': 'light';

  return (
    <Dropdown 
      onClick={() => setActiveOption('main')} 
      animate='animate'
      initial="initial"
      exit='exit'
      variants={scaleFade}
    >
      {themeOptions.theme.map((option) => {
        const isSelected = resolvedTheme === option.href;

        return (
          <LargeBorderButton 
            key={option.id} 
            onClick={() => (setTheme(option.href), closeOptions())}
            $isSelected={isSelected}
          >
            <OptionButton>
              <Image src={option.icon.url} alt={option.linkName} width={24} height={24} />
              {option.linkName}
              {isSelected && <CheckIcon />}
            </OptionButton>
          </LargeBorderButton>
        );
      })}
    </Dropdown>
  );
}
