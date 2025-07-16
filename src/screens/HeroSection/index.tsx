import { useCMSSection } from 'src/hook';
import DownloadIcon from 'public/icons/download.svg';
import styled from 'styled-components';
import { BorderButton, BaseButton, Wrapper } from 'src/styles';
import Link from 'next/link';
import Profile from './Profile';
import AnimatedHeadlines from './AnimatedHeadlines';

const Styled = {
  HeroSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    min-height: 100dvh;

    padding: 13.625rem 0 7.5rem 0;

    @media (min-width: 768px) {
      gap: 2rem;
    }
  `,

  JobTitle: styled.h3`
    font-size: .875rem;
    font-weight: 400;
    color: var(--color-grey-200);
  `,

  Border: styled(BorderButton)`
    border-radius: var(--radius-full);
    max-width: 180px;
    width: 100%;
    
    &:active {
      background: var(--gradient-grey-light-dark-reserve);
    }
  `,

  Button: styled(BaseButton)`
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
  `
};

export default function HeroSection() {
  const {componentName, jobTitle, resumeLabel} = useCMSSection('HeroSectionBlockRecord');

  return (
    <Wrapper>
      <Styled.HeroSection id={componentName}>
        <Profile />
        <Styled.JobTitle>{jobTitle}</Styled.JobTitle>
        <AnimatedHeadlines />

        <Styled.Border>
          <Styled.Button as={Link} href={resumeLabel.href} target='_blank' rel='noopener noreferrer'>
            <DownloadIcon />
            {resumeLabel.linkName}
          </Styled.Button>
        </Styled.Border>
      </Styled.HeroSection>
    </Wrapper>
  );
}