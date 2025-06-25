import { useCMSSection } from 'src/hook';
import { textGradient, Wrapper } from 'src/styles';
import styled from 'styled-components';
import ExperienceTimeline from './ExperienceTimeline';

const Styled = {
  Section: styled.section`
    display: grid;
    place-items: center;
    margin-bottom: 7.5rem;
    gap: 1rem;

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

export default function ExperienceSection() {
  const { componentName, title, description } = useCMSSection('ExperienceSectionBlockRecord');

  return (
    <Wrapper>
      <Styled.Section id={componentName}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

        <ExperienceTimeline />
      </Styled.Section>
    </Wrapper>
  );
}
