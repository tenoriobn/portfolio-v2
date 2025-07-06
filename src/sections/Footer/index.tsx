import DarkModeAnimate from 'src/components/DarkModeAnimate';
import { useCMSSection } from 'src/hook';
import { borderInsetMixin, OverflowAnimationFixed, transitionThemeAnimation } from 'src/styles';
import styled from 'styled-components';

const Styled = {
  Footer: styled.footer`
    ${borderInsetMixin}
    padding: .0625rem 0 0;
    width: 100%;
  `,

  CopyrightWrapper: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    padding: 2rem 1rem;
    position: relative;
    z-index: 5;
    ${transitionThemeAnimation}

    @media (min-width: 768px) {
      padding: 2rem;
    }
  `,

  OverflowAnimationFixed: styled(OverflowAnimationFixed)`
    border-radius: unset;
  `,

  Copyright: styled.p`
    color: ${({ theme }) => theme.colors['grey-300']};
    text-align: center;
    position: relative;
    z-index: 5;
    
    @media (max-width: 474px) {
      max-width: 288px;
      margin: 0 auto;
    }
  `,
};

export default function Footer() {
  const { copyrighttext, year } = useCMSSection('FooterBlockRecord');
  
  return (
    <Styled.Footer>
      <Styled.CopyrightWrapper>
        <Styled.OverflowAnimationFixed>
          <DarkModeAnimate position="fixed" background="grey-800-75%" />
        </Styled.OverflowAnimationFixed>

        <Styled.Copyright>{year} {copyrighttext}</Styled.Copyright>
      </Styled.CopyrightWrapper>
    </Styled.Footer>
  );
}
