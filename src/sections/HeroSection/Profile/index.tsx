import Image from 'next/image';
import { BorderInset, borderInsetMixin, borderRaisedMixin, shadowSM } from 'src/styles';
import styled from 'styled-components';
import WavingIcon from 'public/icons/waving.svg';
import { useCMSSection } from 'src/hook';

const Styled = {
  ProfileContainer: styled.div`
    position: relative;
    width: max-content;
    height: max-content;
  `,

  BorderName: styled(BorderInset)`
    border-radius: var(--radius-full);
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
    border-radius: var(--radius-full);
    background-color: var(--color-grey-800-75);
    padding: .75rem 1.5rem ;
  `,

  AvatarBorderInset: styled.div`
    ${borderInsetMixin}
    ${shadowSM}
    border-radius: var(--radius-full);
  `,

  AvatarBorderRaisedContainer: styled.div`
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-full);
    padding: .75rem;
  `,

  AvatarBorderRaised: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-full);
  `,

  Avatar: styled(Image)`
    border-radius: var(--radius-full);
    background-color: var(--color-grey-800-75);
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
        <Styled.Name>Bruno Tenório <WavingIcon /></Styled.Name>
      </Styled.BorderName>
      
      <Styled.AvatarBorderInset>
        <Styled.AvatarBorderRaisedContainer>
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
