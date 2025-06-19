import styled from 'styled-components';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { scaleFade } from 'src/utils';
import { CircularButton, BorderButton } from 'src/styles';
import { useCMSSection } from 'src/hook';

const Styled = {
  ThemeButtonContainer: styled(BorderButton)`
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
      <CircularButton onClick={() => setIsDark(!isDark)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={isDark ? 'dark' : 'light'} {...scaleFade}>
            <Image src={theme.icon.url} alt={theme.linkName} width={24} height={24} />
          </motion.span>
        </AnimatePresence>
      </CircularButton>
    </Styled.ThemeButtonContainer>
  );
}
