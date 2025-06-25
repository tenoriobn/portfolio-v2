import { borderInsetMixin, borderRaisedMixin, textGradient, Wrapper } from 'src/styles';
import { useCMSSection } from 'src/hook';
import styled from 'styled-components';
import Slide from './Slide';

const Styled = {
  Section: styled.section`
    display: grid;
    place-items: center;
    margin-bottom: 7.5rem;
    gap: 1rem;

    .swiper {
      width: 100%;
      height: 100%;
      cursor: grab;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-pagination-bullets-dynamic {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      transform: unset!important;


      @media (min-width: 768px) {
        max-width: 114px;
      }
    }
    
    .swiper-pagination-bullet {
      opacity: 1;
      ${borderRaisedMixin}
      width: 24px;
      height: 24px;
    }

    .swiper-pagination-bullet-active {
      ${borderInsetMixin}
    }

    .pagination-bullet {
      background-color: ${({ theme }) => theme.colors['grey-800-75%']};
      border-radius: ${({ theme }) => theme.borderRadius.full};
      width: 23px;
      height: 23px;
    }

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    ${textGradient}

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  `,

  Description: styled.p`
    font-size: 1rem;
    text-align: center;
    max-width: 632px;
    margin-bottom: .5rem;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
  `,
};


export default function ProjectsSection() {
  const { componentName, title, description } = useCMSSection('ProjectsSectionBlockRecord');

  return (
    <Wrapper>
      <Styled.Section id={componentName}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Slide />
      </Styled.Section>
    </Wrapper>
  );
}
