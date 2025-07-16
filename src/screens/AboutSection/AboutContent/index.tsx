import Image from 'next/image';
import Link from 'next/link';
import { useCMSSection } from 'src/hook';
import { BaseButton, BorderButton, Description, Title } from 'src/styles';
import styled from 'styled-components';

const Styled = {
  Content: styled.div`
    display: grid;

    @media (min-width: 992px) {
      order: 2;
    }
  `,

  Title: styled(Title)`
    justify-self: center;
    margin-bottom: 1rem;

    @media (max-width: 424px) {
      max-width: 188px;
    }

    @media (min-width: 768px) {
      margin-bottom: 1.5rem;
    }
  `,

  Description: styled(Description)`
    font-style: italic;
    margin-bottom: 1.5rem;
    white-space: pre-line;

    @media (min-width: 768px) {
      margin-bottom: 3rem;
    }
  `,

  SocialList: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: max-content;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  Border: styled(BorderButton)`
    border-radius: var(--radius-full);
    max-width: 180px;
    width: 100%;
  `,

  SocialLink: styled(BaseButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border-radius: var(--radius-full);
    background-color: var(--color-grey-800-75);
    color: var(--color-grey-500);
    padding: 1rem 1.5rem;
    max-width: 180px;
    width: 100%;
  `,
};

export default function AboutContent() {
  const { title, description, socialLink } = useCMSSection('AboutMeSectionBlockRecord');
  const paragraph = description.value.document.children.map(child => child.children?.[0]?.value || '').join('\n');

  return (
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{paragraph}</Styled.Description>

      <Styled.SocialList>
        {socialLink.map((link) => (
          <Styled.Border key={link.id}>
            <Styled.SocialLink as={Link} href={link.href} target='_blank' rel='noopener noreferrer'> 
              <Image src={link.icon.url} alt={link.linkName} width={20} height={20} />
              {link.linkName}
            </Styled.SocialLink>
          </Styled.Border>
        ))}
      </Styled.SocialList>
    </Styled.Content>
  );
}
