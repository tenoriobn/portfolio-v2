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
    padding: 1rem;
  `,

  Pagination: styled.div`
    &.swiper-pagination-bullets-dynamic {
      transform: unset!important;
      display: flex;
      justify-content: center;
      width: 100%!important;
    }

    .swiper-pagination-bullet {
      left: auto!important;
      display: none;
      opacity: 1;
      ${borderInsetMixin}
      width: 24px;
      height: 24px;
      transition: all .3s ease-in-out;

      margin: 0 .75rem!important;

      &:active {
        ${borderRaisedMixin}
      }
    }

    .swiper-pagination-bullet-active-next-next,
    .swiper-pagination-bullet-active-prev-prev {
      transform: scale(0)!important;
    }

    .swiper-pagination-bullet-active-prev,
    .swiper-pagination-bullet-active-next {
      display: block;
      transform: scale(1)!important;
    }

    .swiper-pagination-bullet-active {
      display: block;
      ${borderRaisedMixin}
    }

    .pagination-bullet {
      background-color: ${({ theme }) => theme.colors['grey-800-75%']};
      border-radius: ${({ theme }) => theme.borderRadius.full};
      width: 22px!important;
      height: 22px!important;
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