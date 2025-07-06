import styled from 'styled-components';
import { useCMSSection } from 'src/hook';
import { textGradient, Wrapper } from 'src/styles';
import SlideSkills from './SlideSkills';
import { revealOnScroll } from 'src/utils';

const Styled = {
  Section: styled.section`
    display: grid;
    place-items: center;
    padding-bottom: 7.5rem;
    gap: 1rem;

    .swiper {
      width: 100%;
      height: 100%;
      cursor: grab;
      padding: 0;
    }

    .swiper-slide {
      width: auto !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      width: 48px;
      height: 48px;
    }

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    ${textGradient}

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  `,

  Description: styled.p`
    font-size: 1rem;
    text-align: center;
    max-width: 632px;
    margin-bottom: .5rem;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
  `,
};

export default function SkillsSection() {
  const { componentName, title, description } = useCMSSection('SkillsSectionBlockRecord');

  return (
    <Wrapper {...revealOnScroll}>
      <Styled.Section id={componentName}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        
        <SlideSkills />
      </Styled.Section>
    </Wrapper>
  );
}
