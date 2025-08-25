import Image from 'next/image';
import Link from 'next/link';
import { BaseButton, BorderButton } from 'src/styles';
import styled from 'styled-components';
import { ProjectLinks } from 'src/screens/ProjectsSection/projects.type';

const StyledProjectInfo = {
  Footer: styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

  `,

  ActionButton: styled(BorderButton)`
    border-radius: var(--radius-full);
    width: 100%;
    max-width: 180px;
  `,

  Button: styled(BaseButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: var(--radius-full);
    background-color: var(--color-grey-800-75);
    color: var(--color-grey-500);
    padding: 1rem;
    max-width: 180px;
    width: 100%;

    @media (min-width: 768px) {
      padding: 1rem 1.5rem;
    }
  `,
};

export default function ModalFooter({ projectLinks }: ProjectLinks) {
  return (
    <>
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
