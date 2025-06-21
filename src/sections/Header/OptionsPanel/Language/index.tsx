import Image from 'next/image';
import { LargeBorderButton, OptionButton } from 'src/styles';
import { useChangeLanguage } from './useChangeLanguage';
import { useCMSSection } from 'src/hook';
import useOptionsToggle from '../useOptionsToggle';
import Dropdown from 'src/components/Dropdown';
import CheckIcon from 'public/icons/check.svg';

export default function Language() {
  const { language } = useCMSSection('HeaderBlockRecord');
  const { changeLanguage, locale } = useChangeLanguage();
  const { setActiveOption } = useOptionsToggle();

  return (  
    <Dropdown onClick={() => setActiveOption('main')}>
      {language.options.map((option) => {
        const isSelected = locale === option.href;

        return (
          <LargeBorderButton 
            key={option.id}
            onClick={() => {changeLanguage(option.href); setActiveOption(null);}}
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
