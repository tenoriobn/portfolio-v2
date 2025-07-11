import { useCMSSection } from 'src/hook';
import { Description, Section, textGradient, Title, Wrapper } from 'src/styles';
import styled from 'styled-components';
import ExperienceTimelineItem from './ExperienceTimelineItem';
import { revealOnScroll } from 'src/utils';

const Styled = {
  Section: styled.section`
    display: grid;
    place-items: center;
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

  TimelineContainer: styled.div`
    position: relative;
    display: grid;
    gap: 1rem;
    width: 100%;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  TimelineConnector: styled.div `
    background: var(--gradient-grey-dark-light-dark-reserve);
    position: absolute;
    left: 10px;
    top: 1px;
    height: calc(100% - 1px);
    width: 2px;
  `,
};

export default function ExperienceSection() {
  const { componentName, title, description } = useCMSSection('ExperienceSectionBlockRecord');

  return (
    <Wrapper {...revealOnScroll}>
      <Section id={componentName}>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <Styled.TimelineContainer>
          <Styled.TimelineConnector />
          <ExperienceTimelineItem />
        </Styled.TimelineContainer>
      </Section>
    </Wrapper>
  );
}
