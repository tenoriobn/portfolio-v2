import { borderInsetMixin, shadowSM, Wrapper } from 'src/styles';
import styled from 'styled-components';
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';
import { useCMSSection } from 'src/hook';
import { revealOnScroll } from 'src/utils';

const Styled = {
  Section: styled.section`
    padding-bottom: 7.5rem;
  `,

  BorderSection: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
  `,

  SectionContent: styled.div`
    display: grid;
    place-items: center;
    gap: 1.5rem;

    border-radius: var(--radius-md);
    background-color: var(--color-grey-800-75);
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
};

export default function AboutSection() {
  const { componentName } = useCMSSection('AboutMeSectionBlockRecord');

  return (
    <Wrapper {...revealOnScroll}>
      <Styled.Section id={componentName}>
        <Styled.BorderSection>
          <Styled.SectionContent>
            <AboutContent />
            <AboutImage />
          </Styled.SectionContent>
        </Styled.BorderSection>
      </Styled.Section>
    </Wrapper>
  );
}
