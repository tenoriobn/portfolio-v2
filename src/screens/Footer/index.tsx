import { useCMSSection } from 'src/hook';
import { borderInsetMixin } from 'src/styles';
import styled from 'styled-components';

const Styled = {
  Footer: styled.footer`
    ${borderInsetMixin}
    padding: .0625rem 0 0;
    width: 100%;
  `,

  ContentContainer: styled.div`
    background-color: var(--color-grey-800-75);
    padding: 2rem 1rem;

    @media (min-width: 768px) {
      padding: 2rem;
    }
  `,

  Text: styled.p`
    color: var(--color-grey-300);
    text-align: center;
    
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
      <Styled.ContentContainer>
        <Styled.Text>{year} {copyrighttext}</Styled.Text>
      </Styled.ContentContainer>
    </Styled.Footer>
  );
}
