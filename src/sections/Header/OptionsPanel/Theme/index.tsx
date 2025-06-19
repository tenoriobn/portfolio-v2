import Image from 'next/image';
import { LargeBorderButton, OptionButton } from 'src/styles';
import { useCMSSection } from 'src/hook';
import useOptionsToggle from '../useOptionsToggle';
import Dropdown from 'src/components/Dropdown';

export default function Theme() {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');
  const { setActiveOption } = useOptionsToggle();

  return (
    <Dropdown onClick={() => setActiveOption('main')}>
      {themeOptions.theme.map((theme) => (
        <LargeBorderButton key={theme.id}>
          <OptionButton>
            <Image src={theme.icon.url} alt={theme.linkName} width={24} height={24} />
            {theme.linkName}
          </OptionButton>
        </LargeBorderButton>
      ))}
    </Dropdown>
  );
}
