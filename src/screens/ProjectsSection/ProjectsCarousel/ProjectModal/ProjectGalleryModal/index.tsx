import styled from 'styled-components';
import { borderRaisedMixin, shadowSM } from 'src/styles';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjectGalleryModalProps } from './projectGalleryModal.type';
import { useBreakpoint } from './useBreakpoint';

const Styled = {
  GalleryBox: styled.main`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,

  ImagePanel: styled.div`
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

  ResponsiveImage: styled(Image)`
    height: auto!important;
    max-width: 100%;
    object-fit: cover;
    width: 100%;
    height: auto;
  `,
};

export default function ProjectGalleryModal({ project }: ProjectGalleryModalProps) {
  const { projectTitle, projectGallery } = project;
  const breakpoint = useBreakpoint();

  const selectedImage = {
    mobile: projectGallery[1]?.url,
    tablet: projectGallery[2]?.url,
    desktop: projectGallery[0]?.url,
  }[breakpoint];

  return (
    <Styled.GalleryBox>
      <Styled.ImagePanel >
        <Styled.ResponsiveImage 
          src={selectedImage}
          alt={projectTitle}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 100vw, 100vw"
        />
      </Styled.ImagePanel>
    </Styled.GalleryBox>
  );
}