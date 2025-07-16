import { useCMSSection } from 'src/hooks';
import { Description, Section, Title, Wrapper } from 'src/styles';
import styled from 'styled-components';
import TimelineItem from './TimelineItem';
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

  Timeline: styled.div`
    position: relative;
    display: grid;
    gap: 1rem;
    width: 100%;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  Connector: styled.div `
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

        <Styled.Timeline>
          <Styled.Connector />
          <TimelineItem />
        </Styled.Timeline>
      </Section>
    </Wrapper>
  );
}
