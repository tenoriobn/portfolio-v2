import { borderInsetMixin, OverflowAnimationFixed, shadowSM, transitionThemeAnimation, Wrapper } from 'src/styles';
import styled from 'styled-components';
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';
import { useCMSSection } from 'src/hook';
import { revealOnScroll } from 'src/utils';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  Section: styled.section`
    padding-bottom: 7.5rem;
  `,

  BorderSection: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
  `,

  SectionContent: styled.div`
    display: grid;
    place-items: center;
    gap: 1.5rem;

    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    padding: 1rem;
    ${transitionThemeAnimation}
    position: relative;
    z-index: 5;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,

  OverflowAnimationFixed: styled(OverflowAnimationFixed)`
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
};

export default function AboutSection() {
  const { componentName } = useCMSSection('AboutMeSectionBlockRecord');

  return (
    <Wrapper {...revealOnScroll}>
      <Styled.Section id={componentName}>
        <Styled.BorderSection>
          <Styled.SectionContent>
            <Styled.OverflowAnimationFixed>
              <DarkModeAnimate position="fixed" background="grey-800-75%" />
            </Styled.OverflowAnimationFixed>
            <AboutContent />
            <AboutImage />
          </Styled.SectionContent>
        </Styled.BorderSection>
      </Styled.Section>
    </Wrapper>
  );
}
