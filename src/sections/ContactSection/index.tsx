import { useCMSSection } from 'src/hook';
import {borderRaisedMixin, OverflowAnimationFixed, shadowSM, textGradient, transitionThemeAnimation, Wrapper } from 'src/styles';
import TalkingIcon from 'public/icons/talking.svg';
import styled from 'styled-components';
import SocialContactList from './SocialContactList';
import WinkingFace from 'public/icons/winking-face.svg';
import { revealOnScroll } from 'src/utils';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  ContactSectionContainer: styled.section`
    display: grid;
    place-items: center;
    padding-bottom: 7.5rem;
    gap: 1rem;
    padding-top: 7.5rem;
    position: relative;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  IconWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 100px;
    height: 100px;
  `,

  ContactIconContainer: styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    position: relative;
    z-index: 5;
    ${transitionThemeAnimation}
  `,

  ContactIcon: styled(TalkingIcon)`
    position: relative;
    z-index: 5;
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

    svg {
      height: 1.25rem;
      margin-left: .125rem;
      vertical-align: middle;
    }

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
  `,
};

export default function ContactSection() {
  const { componentName, title, description } = useCMSSection('ContactSectionBlockRecord');

  return (
    <Wrapper {...revealOnScroll}>
      <Styled.ContactSectionContainer id={componentName}>
        <Styled.IconWrapper>
          <Styled.ContactIconContainer>
            <OverflowAnimationFixed>
              <DarkModeAnimate position="fixed" background="grey-800-75%" />
            </OverflowAnimationFixed>

            <Styled.ContactIcon />
          </Styled.ContactIconContainer>
        </Styled.IconWrapper>
        
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description} <WinkingFace /></Styled.Description>

        <SocialContactList />
      </Styled.ContactSectionContainer>
    </Wrapper>
  );
}
