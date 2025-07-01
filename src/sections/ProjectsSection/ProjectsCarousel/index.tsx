import { SwiperSlide } from 'swiper/react';
import { useCMSSection } from 'src/hook';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Carousel from 'src/components/Carousel';

const Styled = {
  Container: styled.div`
    display: grid;
    place-items: center;
    gap: 1rem;
    max-width: 1264px;
    width: 100%;

    @media (min-width: 768px) {
     gap: 1.5rem;
     padding: 1rem;
    }
  `, 
};

export default function ProjectsCarousel() {
  const { projects } = useCMSSection('ProjectsSectionBlockRecord');;

  return (
    <Styled.Container>
      <Carousel >
        {projects?.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Carousel>
      <ProjectModal />
    </Styled.Container>
  );
}