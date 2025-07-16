import { useCMSSection } from 'src/hooks';
import { Description, Section, Title, Wrapper } from 'src/styles';
import SlideSkills from './SlideSkills';
import { revealOnScroll } from 'src/utils';

export default function SkillsSection() {
  const { componentName, title, description } = useCMSSection('SkillsSectionBlockRecord');

  return (
    <Wrapper {...revealOnScroll}>
      <Section id={componentName}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        
        <SlideSkills />
      </Section>
    </Wrapper>
  );
}
