import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { borderInsetMixin, borderRaisedMixin } from 'src/styles';
import { createSwiperConfig } from 'src/utils/swiperConfig';

const Styled = {
  Swiper: styled(Swiper)`
    width: 100%;
    height: 100%;
    cursor: grab;
  `,

  Pagination: styled.div`
    transform: unset!important;
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%!important;
    
    .swiper-pagination-bullet {
      left: auto!important;
      display: none;
      opacity: 1;
      cursor: pointer;    
      margin: 0!important;

      .pagination-bullet {
        background-color: ${({ theme }) => theme.colors['grey-800-75%']};
        border-radius: ${({ theme }) => theme.borderRadius.full};
        width: 22px!important;
        height: 22px!important;
      }
    }

    .swiper-pagination-bullet-active-prev,
    .swiper-pagination-bullet-active-next {
      ${borderInsetMixin}
      display: block;
      transform: scale(0.8);

      &:active {
        ${borderRaisedMixin}
      }
    }

    .swiper-pagination-bullet-active {
      display: block;
      ${borderRaisedMixin}
    }
  `,
};

export default function Carousel({children}: {children: React.ReactNode}) {
  const projectsConfig = createSwiperConfig('projects-carousel-pagination');

  return (
    <>    
      <Styled.Swiper {...projectsConfig} >
        {children}
      </Styled.Swiper>
      <Styled.Pagination className="projects-carousel-pagination"/>
    </>
  );
}