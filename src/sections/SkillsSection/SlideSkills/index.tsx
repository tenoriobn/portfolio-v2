import styled from 'styled-components';
import { borderInsetMixin, OverflowAnimationFixed, shadowSM, transitionThemeAnimation } from 'src/styles';
import { useCMSSection } from 'src/hook';
import AutoScrollCarousel from 'src/components/AutoScrollCarousel';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  ProjectBorder: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    overflow: hidden;
  `,

  Spacing: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 1rem;
    ${transitionThemeAnimation}
    position: relative;
    z-index: 5;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,

  OverflowAnimationFixed: styled(OverflowAnimationFixed)`
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
};

export default function SlideSkills() {
  const { skills } = useCMSSection('SkillsSectionBlockRecord');

  return (
    <Styled.ProjectBorder>    
      <Styled.Spacing>
        <Styled.OverflowAnimationFixed>
          <DarkModeAnimate position="fixed" background="grey-800-75%" />
        </Styled.OverflowAnimationFixed>

        <AutoScrollCarousel icons={skills} iconSize={44} />
      </Styled.Spacing>  
    </Styled.ProjectBorder>
  );
}
