import { LargeBorderButton, OptionButton } from 'src/styles';
import { useChangeLanguage } from './useChangeLanguage';
import { useCMSSection } from 'src/hooks';
import useOptionsToggle from '../useOptionsToggle';
import CheckIcon from 'public/icons/check.svg';
import { scaleFade } from 'src/utils';
import Dropdown from 'src/components/Dropdown';
import { useState } from 'react';
import { IconSkeleton } from 'src/components/skeleton';
import Image from 'next/image';

export default function Language() {
  const { language } = useCMSSection('HeaderBlockRecord');
  const { changeLanguage, locale } = useChangeLanguage();
  const { setActiveOption } = useOptionsToggle();
  const [isLoaded, setIsLoaded] = useState(false);

  return (  
    <Dropdown 
      onClick={() => setActiveOption('main')} 
      animate='animate'
      initial="initial"
      exit='exit'
      variants={scaleFade}
    >
      {language.options.map((option) => {
        const isSelected = locale === option.href;

        return (
          <LargeBorderButton 
            key={option.id}
            onClick={() => {changeLanguage(option.href); setActiveOption(null);}}
            $isSelected={isSelected}
          >
            <OptionButton>
              {!isLoaded && <IconSkeleton />}

              <Image
                src={option.icon.url}
                alt={option.linkName}
                width={24}
                height={24}
                priority
                onLoad={() => setIsLoaded(true)}
                style={{ display: isLoaded ? 'block' : 'none' }}
              />

              {option.linkName}

              {isSelected && <CheckIcon />}
            </OptionButton>
          </LargeBorderButton>
        );
      })}
    </Dropdown>
  );
}