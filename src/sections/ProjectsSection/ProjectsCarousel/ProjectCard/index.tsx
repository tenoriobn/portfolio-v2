import Image from 'next/image';
import MagnifyingGlass from 'public/icons/magnifying-glass.svg';
import styled from 'styled-components';
import { BaseButton, BorderButton, borderInsetMixin, borderRaisedMixin, shadowSM, textGradient } from 'src/styles';
import { ProjectCardProps } from './projectCard.type';
import { useProjectModal } from '../ProjectModal/useProjectModal';

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

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,

  ImageWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.md};
    width: 100%;
    overflow: hidden;
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

  ActionButton: styled(BorderButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  Button: styled(BaseButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['grey-500']};
    padding: 1rem 1.5rem;
    width: 100%;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-1px);
    }
  `,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { openModal } = useProjectModal();
  if (!project) return null;

  const { projectGallery, projectTitle, modalButtonLabel } = project;
  const firstImage = projectGallery?.[0];

  return (
    <Styled.CardWrapper>
      <Styled.Card>
        {firstImage && (
          <Styled.ImageWrapper 
            onClick={() => openModal(project, 'gallery')}
            aria-label={`Ver imagem ampliada do projeto ${projectTitle}`}
          >
            <Styled.ProjectImage 
              src={firstImage.url} 
              alt={`Imagem do projeto ${projectTitle}`}
              width={400} 
              height={600}
              priority={false}
              loading="lazy"
            />
          </Styled.ImageWrapper>
        )}

        <Styled.ContentWrapper>
          <Styled.Content>
            <Styled.Title>{projectTitle}</Styled.Title>

            <Styled.ActionButton>
              <Styled.Button 
                type="button"
                aria-label={`Ver detalhes do projeto ${projectTitle}`}
                onClick={() => openModal(project, 'info')}
              > 
                <MagnifyingGlass aria-hidden="true" /> 
                {modalButtonLabel}
              </Styled.Button>
            </Styled.ActionButton>
          </Styled.Content>
        </Styled.ContentWrapper>
      </Styled.Card>
    </Styled.CardWrapper>
  );
}