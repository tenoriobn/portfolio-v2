import Image from 'next/image';
import Link from 'next/link';
import { useCMSSection } from 'src/hook';
import { BaseButton, BorderButton, borderRaisedMixin, shadowSM, textGradient, Wrapper } from 'src/styles';
import TalkingIcon from 'public/icons/talking.svg';
import styled from 'styled-components';

const Styled = {
  Section: styled.section`
    display: grid;
    place-items: center;
    padding-bottom: 7.5rem;
    gap: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  BorderTalkingIcon: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 100px;
    height: 100px;
  `,

  TalkingIcon: styled(TalkingIcon)`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    ${textGradient}

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  `,

  Description: styled.p`
    font-size: 1rem;
    text-align: center;
    max-width: 632px;
    margin-bottom: .5rem;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
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

export default function ContactSection() {
  const { componentName, title, description, socialLink } = useCMSSection('ContactSectionBlockRecord');

  return (
    <Wrapper>
      <Styled.Section id={componentName}>
        <Styled.BorderTalkingIcon>
          <Styled.TalkingIcon />
        </Styled.BorderTalkingIcon>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

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
      </Styled.Section>
    </Wrapper>
  );
}
