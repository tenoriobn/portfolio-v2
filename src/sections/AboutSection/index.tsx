import { borderInsetMixin, shadowSM, Wrapper } from 'src/styles';
import styled from 'styled-components';
import AboutContent from './AboutContent';
import AboutImage from './AboutImage';

const Styled = {
  Section: styled.section`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;

    margin-bottom: 7.5rem;
  `,

  SectionContent: styled.div`
    display: grid;
    place-items: center;
    gap: 1.5rem;

    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
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
  return (
    <Wrapper>
      <Styled.Section>
        <Styled.SectionContent>
          <AboutContent />
          <AboutImage />
        </Styled.SectionContent>
      </Styled.Section>
    </Wrapper>
  );
}
