import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useCMSSection } from 'src/hook';
import styled from 'styled-components';
import { borderInsetMixin, borderRaisedMixin } from 'src/styles';
import { createSwiperConfig } from '../../../utils/swiperConfig';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Styled = {
  Container: styled.div`
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
      gap: 1.5rem;
      transform: unset !important;
      width: 120px!important;
      overflow: hidden;
      height: 36px !important;
    }

    .swiper-pagination-bullet {
      opacity: 1;
      ${borderRaisedMixin}
      width: 24px;
      height: 24px;
      margin: 0!important;
      transform: unset!important;
    }

    .swiper-pagination-bullet-active {
      ${borderInsetMixin}
    }

    .pagination-bullet {
      background-color: ${({ theme }) => theme.colors['grey-800-75%']};
      border-radius: ${({ theme }) => theme.borderRadius.full};
      width: 22px!important;
      height: 22px!important;
    }
  `,

  Pagination: styled.div`
    margin-top: 1rem;

    @media (min-width: 768px) {
      margin-top: 1.5rem;
    }
  `,
};

export default function ProjectsCarousel() {
  const { projects } = useCMSSection('ProjectsSectionBlockRecord');
  const projectsConfig = createSwiperConfig('projects-carousel-pagination');

  return (
    <Styled.Container>
      <Swiper {...projectsConfig} >
        {projects?.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <Styled.Pagination className="projects-carousel-pagination"/>

      <ProjectModal />
    </Styled.Container>
  );
}