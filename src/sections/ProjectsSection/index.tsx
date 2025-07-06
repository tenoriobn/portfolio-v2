import { textGradient, Wrapper } from 'src/styles';
import { useCMSSection } from 'src/hook';
import styled from 'styled-components';
import ProjectsCarousel from './ProjectsCarousel';
import { revealOnScroll } from 'src/utils';

const Styled = {
  Section: styled.section`
    position: relative;
    display: grid;
    place-items: center;
    padding-bottom: 7.5rem;
    gap: .5rem;

    @media (min-width: 768px) {
      gap: 1rem;
    }
  `,

  Wrapper: styled(Wrapper)`
    display: grid;
    place-items: center;
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
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
  `,
};

export default function ProjectsSection() {
  const { componentName, title, description } = useCMSSection('ProjectsSectionBlockRecord');

  return (
    <Styled.Wrapper {...revealOnScroll}>
      <Styled.Section id={componentName}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <ProjectsCarousel />
      </Styled.Section>
    </Styled.Wrapper>
  );
}
