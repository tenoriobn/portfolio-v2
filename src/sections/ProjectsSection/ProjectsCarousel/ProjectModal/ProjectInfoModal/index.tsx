import styled from 'styled-components';
import { BaseButton, BorderButton } from 'src/styles';
import ToolsIcon from 'public/icons/tools.svg';
import DartIcon from 'public/icons/dart.svg';
import MobileIcon from 'public/icons/mobile.svg';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectItem } from '../../../projects.type';

const StyledProjectInfo = {
  Divider: styled.span`
    background: ${({ theme }) => theme.gradient['grey-dark-light-dark-reserve']};
    width: 100%;
    height: 1px;
  `,

  Main: styled.main`
    display: grid;
    gap: 1.5rem;
  `,

  Section: styled.div`
    display: grid;
    gap: 0.75rem;
  `,

  SectionTitle: styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,

  List: styled.ul`
    display: grid;
    gap: 0.5rem;
    list-style: disc;
    padding-left: 1.5rem;
  `,

  SkillsGrid: styled.div`
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

interface ProjectInfoModalProps {
  project: ProjectItem;
}

export default function ProjectInfoModal({ project }: ProjectInfoModalProps) {
  const { 
    projectDescription, 
    appliedSolutions, 
    challenges, 
    skills, 
    projectLinks 
  } = project;

  return (
    <>
      <StyledProjectInfo.Divider />
      
      <StyledProjectInfo.Main>
        <p>{projectDescription}</p>
        
        {appliedSolutions && (
          <StyledProjectInfo.Section>
            <StyledProjectInfo.SectionTitle>
              <ToolsIcon aria-hidden="true" />
              {appliedSolutions.title}
            </StyledProjectInfo.SectionTitle>

            <StyledProjectInfo.List>
              {appliedSolutions.solution?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </StyledProjectInfo.List>
          </StyledProjectInfo.Section>
        )}

        {challenges && (
          <StyledProjectInfo.Section>
            <StyledProjectInfo.SectionTitle>
              <DartIcon aria-hidden="true" />
              {challenges.title}
            </StyledProjectInfo.SectionTitle>
            
            <StyledProjectInfo.List>
              {challenges.challenge?.map((item) => (
                <li key={item.id}>{item.solution}</li>
              ))}
            </StyledProjectInfo.List>
          </StyledProjectInfo.Section>
        )}

        {skills && (
          <StyledProjectInfo.Section>      
            <StyledProjectInfo.SectionTitle>
              <MobileIcon aria-hidden="true" />
              {skills.title}
            </StyledProjectInfo.SectionTitle>

            <StyledProjectInfo.SkillsGrid>
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
            </StyledProjectInfo.SkillsGrid>
          </StyledProjectInfo.Section>
        )}
      </StyledProjectInfo.Main>

      <StyledProjectInfo.Divider />

      {projectLinks && projectLinks.length > 0 && (
        <StyledProjectInfo.Footer>
          {projectLinks.map((item) => (
            <StyledProjectInfo.ActionButton key={item.id}>
              <StyledProjectInfo.Button 
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
              </StyledProjectInfo.Button>
            </StyledProjectInfo.ActionButton>
          ))}
        </StyledProjectInfo.Footer>
      )}
    </>
  );
}