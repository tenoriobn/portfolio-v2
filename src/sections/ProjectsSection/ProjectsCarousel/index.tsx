import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useCMSSection } from 'src/hook';
import styled from 'styled-components';
import { borderInsetMixin, borderRaisedMixin } from 'src/styles';;
import { swiperConfig } from './swiperConfig';
import ProjectModal from '../ProjectModal';
import ProjectCard from './ProjectCard';

const Styled = {
  CarouselContainer: styled.div`
    display: grid;
    place-items: center;
    
    .swiper {
      width: 100%;
      height: 100%;
      cursor: grab;
    }

    .swiper-pagination-bullets-dynamic {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: unset !important;
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
      width: 22px;
      height: 22px;
    }
  `,

  CustomPagination: styled.div`
    margin-top: 1rem;

    @media (min-width: 768px) {
      margin-top: 1.5rem;
    }
  `,
};

export default function ProjectsCarousel() {
  const { projects } = useCMSSection('ProjectsSectionBlockRecord');

  return (
    <Styled.CarouselContainer>
      <Swiper {...swiperConfig} className="projects-swiper">
        {projects?.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Styled.CustomPagination className="projects-carousel-pagination"/>
      
      <ProjectModal />
    </Styled.CarouselContainer>
  );
}