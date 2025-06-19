import Image from 'next/image';
import { LargeBorderButton, OptionButton } from 'src/styles';
import { useChangeLanguage } from './useChangeLanguage';
import { useCMSSection } from 'src/hook';
import useOptionsToggle from '../useOptionsToggle';
import Dropdown from 'src/components/Dropdown';

export default function Language() {
  const { language } = useCMSSection('HeaderBlockRecord');
  const { changeLanguage } = useChangeLanguage();
  const { setActiveOption } = useOptionsToggle();

  return (  
    <Dropdown onClick={() => setActiveOption('main')}>
      {language.options.map((language) => (
        <LargeBorderButton 
          key={language.id}
          onClick={() => (changeLanguage(language.href), setActiveOption(null))}
        >
          <OptionButton>
            <Image src={language.icon.url} alt={language.linkName} width={24} height={24} />
            {language.linkName}
          </OptionButton>
        </LargeBorderButton>
      ))}
    </Dropdown>
  );
}
