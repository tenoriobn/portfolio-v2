import styled from 'styled-components';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFade } from 'src/utils';
import { CircularButton, BorderButton } from 'src/styles';
import { useCMSSection } from 'src/hook';
import { useThemeToggle } from './useThemeToggle';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  ThemeButtonContainer: styled(BorderButton)`
    @media (max-width: 991px) {
      display: none;
    }
  `,

  CircularButton: styled(CircularButton)`
    position: relative;
    z-index: 5;
  `,

  HeaderOverflowFix: styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    mask-image: radial-gradient(circle at center, black 100%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle at center, black 100%, transparent 100%);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    border-radius: 5000px;
  `,
};

export default function ThemeToggle() {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');
  const { isDark, toggleTheme } = useThemeToggle();
  const iconTheme = themeOptions.theme[isDark ? 1 : 0];

  return (
    <Styled.ThemeButtonContainer>
      <Styled.CircularButton onClick={toggleTheme}>
        <Styled.HeaderOverflowFix>
          <DarkModeAnimate background='rgba(51, 51, 51, 1)' position='fixed' />
        </Styled.HeaderOverflowFix>

        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={isDark ? 'dark' : 'light'} {...scaleFade}>
            <Image src={iconTheme.icon.url} alt={iconTheme.linkName} width={24} height={24} />
          </motion.span>
        </AnimatePresence>
      </Styled.CircularButton>
    </Styled.ThemeButtonContainer>
  );
}
