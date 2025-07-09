import styled from 'styled-components';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFade } from 'src/utils';
import { CircularButton, BorderButton } from 'src/styles';
import { useCMSSection } from 'src/hook';
import { useThemeToggle } from './useThemeToggle';

const Styled = {
  ThemeButtonContainer: styled(BorderButton)`
    @media (max-width: 991px) {
      display: none;
    }
  `,
};

export default function ThemeToggle() {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');
  const { toggleTheme, isDark } = useThemeToggle();
  
  const iconTheme = isDark ? themeOptions.theme[1] : themeOptions.theme[0];

  return (
    <Styled.ThemeButtonContainer>
      <CircularButton onClick={toggleTheme}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={isDark ? 'dark' : 'light'} {...scaleFade}>
            <Image
              src={iconTheme.icon.url}
              alt={iconTheme.linkName}
              width={24}
              height={24}
              priority
            />
          </motion.span>
        </AnimatePresence>
      </CircularButton>
    </Styled.ThemeButtonContainer>
  );
}