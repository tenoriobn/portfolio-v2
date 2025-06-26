import styled from 'styled-components';
import { BaseButton, BorderButton, CircularButton, textGradient } from 'src/styles';
import CloseIcon from 'public/icons/close.svg';
import PinIcon from 'public/icons/pin.svg';
import ToolsIcon from 'public/icons/tools.svg';
import DartIcon from 'public/icons/dart.svg';
import MobileIcon from 'public/icons/mobile.svg';
import Link from 'next/link';
import Image from 'next/image';
import ModalWrapper from 'src/components/ModalWrapper';
import { useProjectModal } from './useProjectModal';

const StyledProjectModal = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  `,

  ProjectTitle: styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    ${textGradient}
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,

  CircularButton: styled(CircularButton)`
    width: 32px;
    height: 32px;
  `,

  CloseIcon: styled(CloseIcon)`
    path {
      transform: scale(0.6);
      transform-origin: center;
      stroke-width: 3px;
    }
  `,

  Line: styled.span`
    background: ${({ theme }) => theme.gradient['grey-dark-light-dark-reserve']};
    width: 100%;
    height: 1px;
    margin: 1rem 0;

    @media (min-width: 768px) {
      margin: 1.5rem 0;
    }
  `,

  Main: styled.main`
    display: grid;
    gap: 1.5rem;
  `,

  ContentSection: styled.div`
    display: grid;
    gap: 0.75rem;
  `,

  Subtitle: styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,

  ListContent: styled.ul`
    display: grid;
    gap: 0.5rem;
    list-style: disc;
    padding-left: 1.5rem;
  `,

  SkillsWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  `,

  Footer: styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
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

export default function ProjectModal() {
  const { isOpen, closeModal, currentProject } = useProjectModal();
  if (!currentProject) return null;
  const { projectTitle, projectDescription, appliedSolutions, challenges, skills, projectLinks } = currentProject;

  return (
    <ModalWrapper 
      isOpen={isOpen} 
      onClose={closeModal} maxWidth={'668px'}
    >
      <StyledProjectModal.Header>
        <StyledProjectModal.ProjectTitle>
          <PinIcon aria-hidden="true" />
          {projectTitle}
        </StyledProjectModal.ProjectTitle>

        <BorderButton>
          <StyledProjectModal.CircularButton 
            onClick={closeModal}
            aria-label="Fechar modal"
          >
            <StyledProjectModal.CloseIcon />
          </StyledProjectModal.CircularButton>
        </BorderButton>
      </StyledProjectModal.Header>

      <StyledProjectModal.Line />

      <StyledProjectModal.Main>
        <p>{projectDescription}</p>
        
        {appliedSolutions && (
          <StyledProjectModal.ContentSection>
            <StyledProjectModal.Subtitle>
              <ToolsIcon aria-hidden="true" />
              {appliedSolutions.title}
            </StyledProjectModal.Subtitle>

            <StyledProjectModal.ListContent>
              {appliedSolutions.solution?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </StyledProjectModal.ListContent>
          </StyledProjectModal.ContentSection>
        )}

        {challenges && (
          <StyledProjectModal.ContentSection>
            <StyledProjectModal.Subtitle>
              <DartIcon aria-hidden="true" />
              {challenges.title}
            </StyledProjectModal.Subtitle>
            
            <StyledProjectModal.ListContent>
              {challenges.challenge?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </StyledProjectModal.ListContent>
          </StyledProjectModal.ContentSection>
        )}

        {skills && (
          <StyledProjectModal.ContentSection>      
            <StyledProjectModal.Subtitle>
              <MobileIcon aria-hidden="true" />
              {skills.title}
            </StyledProjectModal.Subtitle>

            <StyledProjectModal.SkillsWrapper>
              {skills.skill?.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Tecnologia: ${item.linkName}`}
                >
                  <Image 
                    src={item.icon.url} 
                    alt={item.linkName} 
                    width={48} 
                    height={48} 
                  />
                </Link>
              ))}
            </StyledProjectModal.SkillsWrapper>
          </StyledProjectModal.ContentSection>
        )}
      </StyledProjectModal.Main>

      <StyledProjectModal.Line />

      {projectLinks && projectLinks.length > 0 && (
        <StyledProjectModal.Footer>
          {projectLinks.map((item) => (
            <StyledProjectModal.ActionButton key={item.id}>
              <StyledProjectModal.Button 
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
              </StyledProjectModal.Button>
            </StyledProjectModal.ActionButton>
          ))}
        </StyledProjectModal.Footer>
      )}
    </ModalWrapper>
  );
}