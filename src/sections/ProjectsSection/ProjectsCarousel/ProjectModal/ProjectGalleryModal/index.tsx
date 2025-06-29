import styled from 'styled-components';
import { borderRaisedMixin, shadowSM } from 'src/styles';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createSwiperConfig } from 'src/utils/swiperConfig';
import { ProjectItem } from '../../../projects.type';
import 'swiper/css';
import 'swiper/css/pagination';

const StyledProjectGallery = {
  GalleryContainer: styled.main`
    overflow: hidden;
    height: 100%;
  `,

  SlideWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    justify-self: center;
    border-radius: ${({ theme }) => theme.borderRadius.md}; 
    max-width: 100%;
    height: 100%;
  `,

  Slide: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    height: 100%;
    overflow-x: hidden;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
      
    &::-webkit-scrollbar {
      display: none;
    } 
  `,

  ProjectImage: styled(Image)`
    max-width: 100%;
    height: auto;
    width: auto;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,

  PaginationContainer: styled.div`
    place-self: center;
    height: 32px;
  `,
};

interface ProjectGalleryModalProps {
  project: ProjectItem;
}

export default function ProjectGalleryModal({ project }: ProjectGalleryModalProps) {
  const { projectTitle, projectGallery } = project;
  const galleryConfig = createSwiperConfig('projects-carousel-pagination-two', { 0: { slidesPerView: 1 } });

  return (
    <>
      <StyledProjectGallery.GalleryContainer>
        <Swiper {...galleryConfig} className="projects-swiper">
          {projectGallery?.map((image) => (
            <SwiperSlide key={image.id}>
              <StyledProjectGallery.SlideWrapper>
                <StyledProjectGallery.Slide>
                  <StyledProjectGallery.ProjectImage 
                    src={image.url} 
                    alt={projectTitle}
                    width={1440} 
                    height={3687}
                    priority
                  />
                </StyledProjectGallery.Slide>
              </StyledProjectGallery.SlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledProjectGallery.GalleryContainer>

      <StyledProjectGallery.PaginationContainer 
        className="projects-carousel-pagination-two"
      />
    </>
  );
}