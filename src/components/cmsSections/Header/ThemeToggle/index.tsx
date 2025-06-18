import styled from 'styled-components';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { scaleFade } from 'src/utils';
import { ControlButton, ButtonBorder } from 'src/styles';
import { useCMSSection } from '../../useCMSSection.ts';

const Styled = {
  ThemeButtonContainer: styled(ButtonBorder)`
    @media (max-width: 991px) {
      display: none;
    }
  `,
};

export default function ThemeToggle() {
  const { themeOptions } = useCMSSection('HeaderBlockRecord');
  const [isDark, setIsDark] = useState(true);
  const theme = themeOptions.theme[isDark ? 0 : 1];

  return (
    <Styled.ThemeButtonContainer>
      <ControlButton onClick={() => setIsDark(!isDark)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={isDark ? 'dark' : 'light'} {...scaleFade}>
            <Image src={theme.icon.url} alt={theme.linkName} width={24} height={24} />
          </motion.span>
        </AnimatePresence>
      </ControlButton>
    </Styled.ThemeButtonContainer>
  );
}
