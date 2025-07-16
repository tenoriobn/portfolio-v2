import styled from 'styled-components';
import { borderInsetMixin, shadowSM } from 'src/styles';
import { useCMSSection } from 'src/hook';
import AutoScrollCarousel from 'src/components/AutoScrollCarousel';

const Styled = {
  Border: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
    overflow: hidden;
  `,

  Wrapper: styled.div`
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-md);
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,
};

export default function SlideSkills() {
  const { skills } = useCMSSection('SkillsSectionBlockRecord');

  return (
    <Styled.Border>    
      <Styled.Wrapper>
        <AutoScrollCarousel icons={skills} iconSize={44} />
      </Styled.Wrapper>  
    </Styled.Border>
  );
}
