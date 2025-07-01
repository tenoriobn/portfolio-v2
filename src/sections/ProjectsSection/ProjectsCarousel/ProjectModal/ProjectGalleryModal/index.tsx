import styled from 'styled-components';
import { borderRaisedMixin, shadowSM } from 'src/styles';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjectGalleryModalProps } from './ProjectGalleryModal.type';

const Styled = {
  GalleryContainer: styled.main`
    ${borderRaisedMixin}
    overflow: hidden;
    width: 100%;
    height: 100%;
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,

  ProjectImageWrapper: styled.div`
    background: ${({ theme }) => theme.colors['grey-800-75%']};
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
  `,
};

export default function ProjectGalleryModal({ project }: ProjectGalleryModalProps) {
  const { projectTitle, projectGallery } = project;

  return (
    <>
      <Styled.GalleryContainer>
        <Styled.ProjectImageWrapper>
          <Styled.ProjectImage 
            src={projectGallery[0].url} 
            alt={projectTitle}
            width={1440} 
            height={3687}
            priority
          />
        </Styled.ProjectImageWrapper>
      </Styled.GalleryContainer>
    </>
  );
}