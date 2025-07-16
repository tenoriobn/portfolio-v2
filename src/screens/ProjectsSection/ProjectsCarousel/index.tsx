import { SwiperSlide } from 'swiper/react';
import { useCMSSection } from 'src/hooks';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Carousel from 'src/components/Carousel';

export default function ProjectsCarousel() {
  const { projects } = useCMSSection('ProjectsSectionBlockRecord');;

  return (
    <>
      <Carousel>
        {projects?.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Carousel>
      
      <ProjectModal />
    </>
  );
}