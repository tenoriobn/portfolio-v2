import { useCMSSection } from 'src/hook';
import { textGradient, Wrapper } from 'src/styles';
import styled from 'styled-components';
import ExperienceTimelineItem from './ExperienceTimelineItem';
import { revealOnScroll } from 'src/utils';

const Styled = {
  Section: styled.section`
    display: grid;
    place-items: center;
    gap: 1rem;
    position: relative;

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
    background: ${({ theme }) => theme.gradient['grey-dark-light-dark-reserve']};
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
      <Styled.Section id={componentName}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

        <Styled.TimelineContainer>
          <Styled.TimelineConnector />
          <ExperienceTimelineItem />
        </Styled.TimelineContainer>
      </Styled.Section>
    </Wrapper>
  );
}
