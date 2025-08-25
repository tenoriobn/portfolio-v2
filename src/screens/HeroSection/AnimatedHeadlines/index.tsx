import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { useCMSSection } from 'src/hooks';
import { textGradient } from 'src/styles';
import { blurInFade } from 'src/utils';
import styled from 'styled-components';
import { useRotatingText } from './useRotatingTextIndex';

const Styled = {
  Headline: styled(motion.h2)`
    display: inline-block;
    min-height: 1.2em;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    max-width: 288px;

    @media (min-width: 375px) {
      font-size: 1.45rem;
      max-width: 340px;
    }

    ${textGradient}

    span {
      ${textGradient}
    }

    @media (min-width: 768px) {
      font-size: 2.5rem;    
      max-width: 588px;
    }
  `,
};

export default function AnimatedHeadlines() {
  const { highlightRotatingTexts } = useCMSSection('HeroSectionBlockRecord');
  const activeTextIndex = useRotatingText(highlightRotatingTexts.length);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Styled.Headline key={activeTextIndex} {...blurInFade}>
        {highlightRotatingTexts[activeTextIndex].text}
      </Styled.Headline>
    </AnimatePresence>
  );
}
