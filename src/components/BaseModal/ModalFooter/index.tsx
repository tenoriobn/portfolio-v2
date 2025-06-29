import Image from 'next/image';
import Link from 'next/link';
import { BaseButton, BorderButton } from 'src/styles';
import styled from 'styled-components';
import { ModalFooterProps } from './modalFooter.type';

const StyledProjectInfo = {
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
  `,
};

export default function ModalFooter({ projectLinks }: ModalFooterProps) {
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
