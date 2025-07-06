import Image from 'next/image';
import { BorderInset, borderInsetMixin, borderRaisedMixin, OverflowAnimationFixed, shadowSM, transitionThemeAnimation } from 'src/styles';
import styled from 'styled-components';
import WavingIcon from 'public/icons/waving.svg';
import { useCMSSection } from 'src/hook';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  ProfileContainer: styled.div`
    position: relative;
    width: max-content;
    height: max-content;
  `,

  BorderName: styled(BorderInset)`
    display: none;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    position: absolute;
    margin-left: -40%;
    left: 32%;
    top: -32%;
    z-index: 1;

    @media (min-width: 768px) {
      left: 146%;
      top: 16px;
    }
  `,

  NameContainer: styled.div`
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    padding: .75rem 1.5rem ;
    position: relative;
    z-index: 5;
    width: 100%;
    height: 100%;
    ${transitionThemeAnimation}
  `,

  Name: styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
    position: relative;
    z-index: 5;
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
    ${transitionThemeAnimation}
    position: relative;
    z-index: 5;
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
};


export default function Profile() {
  const { avatar } = useCMSSection('HeroSectionBlockRecord');

  return (
    <Styled.ProfileContainer>
      <Styled.BorderName>
        <Styled.NameContainer>
          <OverflowAnimationFixed>
            <DarkModeAnimate position="fixed" background="grey-800-75%" />
          </OverflowAnimationFixed>

          <Styled.Name>
            Bruno Tenório <WavingIcon />
          </Styled.Name>
        </Styled.NameContainer>
      </Styled.BorderName>
      
      <Styled.AvatarBorderInset>
        <Styled.AvatarBorderRaisedContainer>
          <OverflowAnimationFixed>
            <DarkModeAnimate position="fixed" background="grey-800-75%" />
          </OverflowAnimationFixed>

          <Styled.AvatarBorderRaised>
            <Styled.Avatar 
              src={avatar.url} 
              width={224} 
              height={224} 
              priority 
              alt="Foto de perfil do Bruno Tenório" 
            />
          </Styled.AvatarBorderRaised>
        </Styled.AvatarBorderRaisedContainer>
      </Styled.AvatarBorderInset>
    </Styled.ProfileContainer>
  );
}
