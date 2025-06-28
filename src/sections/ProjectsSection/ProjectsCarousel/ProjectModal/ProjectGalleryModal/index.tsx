import styled from 'styled-components';
import { BaseButton, BorderButton, borderRaisedMixin, shadowSM } from 'src/styles';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createSwiperConfig } from '../../../../../utils/swiperConfig';
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

  Footer: styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    flex-shrink: 0;
  `,

  ActionButton: styled(BorderButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 100%;
    max-width: 180px;
  `,

  Button: styled(BaseButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    color: ${({ theme }) => theme.colors['grey-500']};
    padding: 1rem 1.5rem;
    max-width: 180px;
    width: 100%;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-1px);
    }
  `,
};

interface ProjectGalleryModalProps {
  project: ProjectItem;
}

export default function ProjectGalleryModal({ project }: ProjectGalleryModalProps) {
  const { projectTitle, projectGallery, projectLinks } = project;
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

      <StyledProjectGallery.Footer>
        {projectLinks?.map((item) => (
          <StyledProjectGallery.ActionButton key={item.id}>
            <StyledProjectGallery.Button 
              as={Link} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Acessar ${item.linkName}`}
            >
              <Image 
                src={item.icon.url} 
                alt={item.linkName} 
                width={20} 
                height={20} 
              />
              {item.linkName}
            </StyledProjectGallery.Button>
          </StyledProjectGallery.ActionButton>
        ))}
      </StyledProjectGallery.Footer>
    </>
  );
}