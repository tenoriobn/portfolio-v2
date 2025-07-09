import { Description, Section, Title, Wrapper } from 'src/styles';
import { useCMSSection } from 'src/hook';
import styled from 'styled-components';
import ProjectsCarousel from './ProjectsCarousel';
import { revealOnScroll } from 'src/utils';

const Styled = {
  Wrapper: styled(Wrapper)`
    display: grid;
    place-items: center;
  `,
};

export default function ProjectsSection() {
  const { componentName, title, description } = useCMSSection('ProjectsSectionBlockRecord');

  return (
    <Styled.Wrapper {...revealOnScroll}>
      <Section id={componentName}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ProjectsCarousel />
      </Section>
    </Styled.Wrapper>
  );
}
