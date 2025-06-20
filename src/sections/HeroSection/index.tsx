import Image from 'next/image';
import { useCMSSection } from 'src/hook';
import DownloadIcon from 'public/icons/download.svg';
import WavingIcon from 'public/icons/waving.svg';
import styled from 'styled-components';
import { borderInsetMixin, BorderButton, BaseButton, shadowSM, borderRaisedMixin, BorderInset } from 'src/styles';

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

  ProfileHeaderContainer: styled.div`
    position: relative;
    width: max-content;
    height: max-content;
  `,

  BorderName: styled(BorderInset)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    position: absolute;
    left: 32%;
    top: -32%;
    transform: translateX(-50%) rotate(-12deg);
    z-index: 1;

    @media (min-width: 768px) {
      left: 146%;
      top: 16px;
    }
  `,

  Name: styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    padding: .75rem 1.5rem ;
  `,

  AvatarBorderInset: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  AvatarBorderRaisedContainer: styled.div`
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    padding: .75rem;
  `,

  AvatarBorderRaised: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.full};
  `,

  Avatar: styled(Image)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    width: 178px;
    height: 178px;

    @media (min-width: 768px) {
      width: 220px;
      height: 220px;
    }
  `,

  JobTitle: styled.h3`
    font-size: .875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['grey-200']};
  `,

  Title: styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    max-width: 588px;

    background: ${({ theme }) => theme.gradient['grey-gradient-text']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
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
  `
};

export default function HeroSection() {
  const {avatar, jobTitle, highlightFixedText, highlightRotatingTexts, resumeLabel} = useCMSSection('HeroSectionBlockRecord');

  return (
    <Styled.HeroSection>
      <Styled.ProfileHeaderContainer>
        <Styled.BorderName>
          <Styled.Name>Bruno Tenório <WavingIcon /></Styled.Name>
        </Styled.BorderName>
        <Styled.AvatarBorderInset>

          <Styled.AvatarBorderRaisedContainer>
            <Styled.AvatarBorderRaised>
              <Styled.Avatar src={avatar.url} width={224} height={224} alt="Foto de perfil do Bruno Tenório" />
            </Styled.AvatarBorderRaised>
          </Styled.AvatarBorderRaisedContainer>
        </Styled.AvatarBorderInset>
      </Styled.ProfileHeaderContainer>

      <Styled.JobTitle>{jobTitle}</Styled.JobTitle>

      <Styled.Title>
        {highlightFixedText} <span>{highlightRotatingTexts[0].text}</span>
      </Styled.Title>

      <Styled.ResumeButtonBorder>
        <Styled.ResumeButton>
          <DownloadIcon />
          {resumeLabel.linkName}
        </Styled.ResumeButton>
      </Styled.ResumeButtonBorder>
    </Styled.HeroSection>
  );
}
