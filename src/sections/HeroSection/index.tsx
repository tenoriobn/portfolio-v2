import { useCMSSection } from 'src/hook';
import DownloadIcon from 'public/icons/download.svg';
import styled from 'styled-components';
import { BorderButton, BaseButton, Wrapper, OverflowAnimationFixed, transitionThemeAnimation } from 'src/styles';
import Link from 'next/link';
import Profile from './Profile';
import HighlightRotatingTexts from './TitleHeroSection';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

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
    color: ${({ theme }) => theme.colors['grey-200']};
    position: relative;
    z-index: 5;
  `,

  ResumeButtonBorder: styled(BorderButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    max-width: 180px;
    width: 100%;
    
    &:active {
      background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
    }
  `,

  ResumeButton: styled(BaseButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    padding: 1rem 1.5rem;
    max-width: 180px;
    width: 100%;
    ${transitionThemeAnimation}
    position: relative;
    z-index: 5;
  `,

  Label: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    position: relative;
    z-index: 5;
    color: ${({ theme }) => theme.colors['grey-500']};
  `,
};

export default function HeroSection() {
  const {componentName, jobTitle, resumeLabel} = useCMSSection('HeroSectionBlockRecord');

  return (
    <Wrapper>
      <Styled.HeroSection id={componentName}>
        <Profile />
        <Styled.JobTitle>{jobTitle}</Styled.JobTitle>
        <HighlightRotatingTexts />

        <Styled.ResumeButtonBorder>
          <Styled.ResumeButton as={Link} href={resumeLabel.href} target='_blank' rel='noopener noreferrer'>
            <OverflowAnimationFixed>
              <DarkModeAnimate position="fixed" background="grey-800-75%" />
            </OverflowAnimationFixed>

            <Styled.Label>
              <DownloadIcon />
              {resumeLabel.linkName}
            </Styled.Label>
          </Styled.ResumeButton>
        </Styled.ResumeButtonBorder>
      </Styled.HeroSection>
    </Wrapper>
  );
}