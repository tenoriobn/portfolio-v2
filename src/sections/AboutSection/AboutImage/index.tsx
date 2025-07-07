import { borderRaisedMixin, shadowSM } from 'src/styles';
import styled from 'styled-components';

const Styled = {
  BorderImage: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
    height: 100%;

    @media (min-width: 992px) {
      order: 1;
    }
  `,

  BackgroundImage: styled.div`
    background: url('/video/running.gif') center/cover no-repeat;
    width: 100%;
    border-radius: var(--radius-md);

    @media (max-width: 991px) {
      aspect-ratio: 1;
      max-height: 442px;
    }
    
    @media (min-width: 992px) {
      height: 100%;
    }
  `,
};

export default function AboutImage() {
  return (
    <Styled.BorderImage>
      <Styled.BackgroundImage 
        role="img"
        aria-label="Gif animado de um homem correndo em uma paisagem natural"
      />
    </Styled.BorderImage>
  );
}
