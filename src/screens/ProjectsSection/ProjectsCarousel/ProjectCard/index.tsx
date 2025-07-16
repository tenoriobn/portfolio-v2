import Image from 'next/image';
import MagnifyingGlass from 'public/icons/magnifying-glass.svg';
import styled from 'styled-components';
import { BaseButton, BorderButton, borderInsetMixin, borderRaisedMixin, shadowSM, textGradient } from 'src/styles';
import { ProjectCardProps } from './projectCard.type';
import { useProjectModal } from '../ProjectModal/useProjectModal';
import { useRef } from 'react';

const Styled = {
  CardWrapper: styled.div`
    ${borderInsetMixin}
    border-radius: var(--radius-md);
    width: 100%;
  `,

  Card: styled.div`
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-md);
    display: grid;
    gap: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,

  ImageWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  `,

  Image: styled(Image)`
    border-radius: var(--radius-md);
    object-position: top;
    object-fit: cover;
    width: 100%;
    height: 312px;

    @media (min-width: 768px) {
      height: 334px;
    }
  `,

  ContentWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-md);
    width: 100%;
    height: 100%;
  `,

  Content: styled.div`
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-md);
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,

  Title: styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    ${textGradient}

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  BorderButton: styled(BorderButton)`
    border-radius: var(--radius-full);
  `,

  Button: styled(BaseButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: var(--radius-full);
    background-color: var(--color-grey-800-75);
    font-size: 1rem;
    color: var(--color-grey-500);
    padding: 1rem 1.5rem;
    width: 100%;
  `,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { openModal } = useProjectModal();
  const cardRef = useRef<HTMLDivElement>(null);
  
  if (!project) return null;

  const { projectGallery, projectTitle, modalButtonLabel } = project;
  const firstImage = projectGallery?.[0];

  return (
    <Styled.CardWrapper ref={cardRef}>
      <Styled.Card>
        {firstImage && (
          <Styled.ImageWrapper 
            onClick={() => openModal(project, 'gallery', cardRef.current)}
            aria-label={`Ver imagem ampliada do projeto ${projectTitle}`}
          >
            <Styled.Image 
              src={firstImage.url} 
              alt={`Imagem do projeto ${projectTitle}`}
              width={400} 
              height={600}
            />
          </Styled.ImageWrapper>
        )}

        <Styled.ContentWrapper>
          <Styled.Content>
            <Styled.Title>{projectTitle}</Styled.Title>

            <Styled.BorderButton>
              <Styled.Button 
                type="button"
                aria-label={`Ver detalhes do projeto ${projectTitle}`}
                onClick={() => openModal(project, 'info', cardRef.current)}
              > 
                <MagnifyingGlass aria-hidden="true" /> 
                {modalButtonLabel}
              </Styled.Button>
            </Styled.BorderButton>
          </Styled.Content>
        </Styled.ContentWrapper>
      </Styled.Card>
    </Styled.CardWrapper>
  );
}
