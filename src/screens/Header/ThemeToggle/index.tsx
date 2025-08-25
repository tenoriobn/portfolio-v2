import styled from 'styled-components';
import { AnimatePresence, motion } from 'motion/react';
import { scaleFade } from 'src/utils';
import { CircularButton, BorderButton } from 'src/styles';
import { useCMSSection } from 'src/hooks';
import { useThemeToggle } from './useThemeToggle';

const Styled = {
  ThemeButtonWrapper: styled(BorderButton)<{ $sun: string; $moon: string }>`
    @media (max-width: 991px) { display: none; }

    --icon-sun: url('${(props) => props.$sun}');
    --icon-moon: url('${(props) => props.$moon}');
    --theme-icon: var(--icon-sun);

    [data-theme='dark'] & {
      --theme-icon: var(--icon-moon);
    }
  `,

  Icon: styled(motion.span)`
    width: 24px;
    height: 24px;
    display: inline-block;
    background-image: var(--theme-icon);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  `,
};

export default function ThemeToggle() {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');
  const sunUrl  = themeOptions.theme[0].icon.url;
  const moonUrl = themeOptions.theme[1].icon.url;

  const { toggleTheme } = useThemeToggle();

  return (
    <Styled.ThemeButtonWrapper $sun={sunUrl} $moon={moonUrl}>
      <CircularButton onClick={toggleTheme} aria-label="Alternar tema">
        <AnimatePresence mode="wait" initial={false}>
          <Styled.Icon {...scaleFade} />
        </AnimatePresence>
      </CircularButton>
    </Styled.ThemeButtonWrapper>
  );
}
