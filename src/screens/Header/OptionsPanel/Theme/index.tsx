import Image from 'next/image';
import { LargeBorderButton, OptionButton } from 'src/styles';
import { useCMSSection } from 'src/hooks';
import useOptionsToggle from '../useOptionsToggle';
import CheckIcon from 'public/icons/check.svg';
import { useThemeToggle } from '../../ThemeToggle/useThemeToggle';
import { scaleFade } from 'src/utils';
import Dropdown from 'src/components/Dropdown';
import { useState } from 'react';
import { IconSkeleton } from 'src/components/skeleton';
import styled from 'styled-components';

const ImageWrapper = styled.span`
  display: inline-block; 
  width: 24px;
  height: 24px;
  position: relative;

  img {
    width: 24px;
    height: 24px;
  }
`;


export default function Theme() {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');
  const { setActiveOption, closeOptions } = useOptionsToggle();
  const { isDark, setTheme } = useThemeToggle();
  const resolvedTheme = isDark ? 'dark': 'light';
  const [isLoaded, setIsLoaded] = useState(false);

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
              <ImageWrapper>
                {!isLoaded && <IconSkeleton />}

                <Image 
                  src={option.icon.url} 
                  alt={option.linkName} 
                  width={24} 
                  height={24} 
                  onLoad={() => setIsLoaded(true)}
                  style={{
                    opacity: isLoaded ? 1 : 0,
                  }}
                />
              </ImageWrapper>

              {option.linkName}
              {isSelected && <CheckIcon />}
            </OptionButton>
          </LargeBorderButton>
        );
      })}
    </Dropdown>
  );
}
