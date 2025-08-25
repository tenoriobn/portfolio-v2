import styled from 'styled-components';
import { borderRaisedMixin, shadowSM } from 'src/styles';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjectModalProps } from 'src/screens/ProjectsSection/projects.type';
import { useState } from 'react';
import { ImageSkeleton } from 'src/components/skeleton';

const Styled = {
  GalleryBox: styled.main`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,

  ImagePanel: styled.picture`
    background: var(--color-grey-800-75);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: var(--radius-md);
    height: 100%;
    overflow-x: hidden;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    position: relative;
      
    &::-webkit-scrollbar {
      display: none;
    } 
  `,

  ResponsiveImage: styled.img`
    height: auto!important;
    max-width: 100%;
    object-fit: cover;
    width: 100%;
    height: auto;
  `,
};

export default function ProjectGalleryModal({ project }: ProjectModalProps) {
  const { projectTitle, projectGallery } = project;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Styled.GalleryBox>
      <Styled.ImagePanel>
        {!isLoaded && <ImageSkeleton />} 
        <source srcSet={projectGallery[1]?.url} media="(max-width: 767px)" />
        <source srcSet={projectGallery[2]?.url} media="(max-width: 991px)" />
        
        <Styled.ResponsiveImage
          src={projectGallery[0]?.url}
          alt={projectTitle}
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 100vw, 100vw"
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      </Styled.ImagePanel>
    </Styled.GalleryBox>
  );
}