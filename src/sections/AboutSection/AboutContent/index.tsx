import Image from 'next/image';
import Link from 'next/link';
import { useCMSSection } from 'src/hook';
import { BaseButton, BorderButton, textGradient } from 'src/styles';
import styled from 'styled-components';

const Styled = {
  AboutContentWrapper: styled.div`
    display: grid;

    @media (min-width: 992px) {
      order: 2;
    }
  `,

  Title: styled.h2`
    justify-self: center;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    ${textGradient}
    margin-bottom: 1rem;

    @media (max-width: 424px) {
      max-width: 188px;
    }

    @media (min-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  `,

  Description: styled.p`
    font-size: 1rem;
    font-style: italic;
    text-align: center;
    margin-bottom: 1.5rem;
    white-space: pre-line;

    @media (min-width: 768px) {
      margin-bottom: 3rem;
    }
  `,

  SocialLinksContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: max-content;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  SocialLinkBorder: styled(BorderButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    max-width: 180px;
    width: 100%;
    
    &:active {
      background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
    }
  `,

  SocialLink: styled(BaseButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    color: ${({ theme }) => theme.colors['grey-500']};
    padding: 1rem 1.5rem;
    max-width: 180px;
    width: 100%;
  `,
};

export default function AboutContent() {
  const { title, description, socialLink } = useCMSSection('AboutMeSectionBlockRecord');
  const paragraph = description.value.document.children[0].children[0].value;

  return (
    <Styled.AboutContentWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{paragraph}</Styled.Description>

      <Styled.SocialLinksContainer>
        {socialLink.map((link) => (
          <Styled.SocialLinkBorder key={link.id}>
            <Styled.SocialLink as={Link} href={link.href} target='_blank' rel='noopener noreferrer'> 
              <Image src={link.icon.url} alt={link.linkName} width={20} height={20} />
              {link.linkName}
            </Styled.SocialLink>
          </Styled.SocialLinkBorder>
        ))}
      </Styled.SocialLinksContainer>
    </Styled.AboutContentWrapper>
  );
}
