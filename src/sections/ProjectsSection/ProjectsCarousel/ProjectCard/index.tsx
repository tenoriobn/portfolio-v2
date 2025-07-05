import Image from 'next/image';
import MagnifyingGlass from 'public/icons/magnifying-glass.svg';
import styled from 'styled-components';
import { BaseButton, BorderButton, borderInsetMixin, borderRaisedMixin, OverflowAnimationFixed, shadowSM, textGradient, transitionThemeAnimation } from 'src/styles';
import { ProjectCardProps } from './projectCard.type';
import { useProjectModal } from '../ProjectModal/useProjectModal';
import { useRef } from 'react';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  CardWrapper: styled.div`
    ${borderInsetMixin}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
  `,

  Card: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    display: grid;
    gap: 1rem;
    padding: 1rem;
    ${transitionThemeAnimation}
    position: relative;
    z-index: 5;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,

  OverflowAnimationFixed: styled(OverflowAnimationFixed)`
    border-radius: ${({ theme }) => theme.borderRadius.md};
    z-index: 0;
  `,

  ImageWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  `,

  ProjectImage: styled(Image)`
    border-radius: ${({ theme }) => theme.borderRadius.md};
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
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    height: 100%;
  `,

  Content: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem;
    position: relative;
    z-index: 5;
    ${transitionThemeAnimation}

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
    position: relative;
    z-index: 5;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  `,

  ActionButton: styled(BorderButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  Button: styled(BaseButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    padding: 1rem 1.5rem;
    width: 100%;
    ${transitionThemeAnimation}
    position: relative;
    z-index: 5;
  `,

  Label: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['grey-500']};
    position: relative;
    z-index: 5;
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
        <Styled.OverflowAnimationFixed>
          <DarkModeAnimate position="fixed" background="grey-800-75%" />
        </Styled.OverflowAnimationFixed>

        {firstImage && (
          <Styled.ImageWrapper 
            onClick={() => openModal(project, 'gallery', cardRef.current)}
            aria-label={`Ver imagem ampliada do projeto ${projectTitle}`}
          >
            <Styled.ProjectImage 
              src={firstImage.url} 
              alt={`Imagem do projeto ${projectTitle}`}
              width={400} 
              height={600}
            />
          </Styled.ImageWrapper>
        )}

        <Styled.ContentWrapper>
          <Styled.Content>
            <Styled.OverflowAnimationFixed>
              <DarkModeAnimate position="fixed" background="grey-800-75%" />
            </Styled.OverflowAnimationFixed>

            <Styled.Title>{projectTitle}</Styled.Title>

            <Styled.ActionButton>
              <Styled.Button 
                type="button"
                aria-label={`Ver detalhes do projeto ${projectTitle}`}
                onClick={() => openModal(project, 'info', cardRef.current)}
              > 
                <OverflowAnimationFixed>
                  <DarkModeAnimate position="fixed" background="grey-800-75%" />
                </OverflowAnimationFixed>

                <Styled.Label>
                  <MagnifyingGlass aria-hidden="true" /> 
                  {modalButtonLabel}
                </Styled.Label>
              </Styled.Button>
            </Styled.ActionButton>
          </Styled.Content>
        </Styled.ContentWrapper>
      </Styled.Card>
    </Styled.CardWrapper>
  );
}
