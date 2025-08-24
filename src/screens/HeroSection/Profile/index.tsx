import Image from 'next/image';
import { BorderInset, borderInsetMixin, borderRaisedMixin, shadowSM } from 'src/styles';
import styled from 'styled-components';
import WavingIcon from 'public/icons/waving.svg';
import { useCMSSection } from 'src/hooks';
import { useState } from 'react';
import { ImageSkeleton } from 'src/components/skeleton';

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: max-content;
    height: max-content;
  `,

  BorderBadge: styled(BorderInset)`
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

  BadgeText: styled.p`
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

  AvatarBorderRaisedWrapper: styled.div`
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-full);
    padding: .75rem;
  `,

  AvatarBorderRaised: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-full);
  `,

  AvatarWrapper: styled.div`
    position: relative;
    width: 178px;
    height: 178px;
    border-radius: var(--radius-full);
    overflow: hidden;

    & > * {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 768px) {
      width: 220px;
      height: 220px;
    }
  `,

  Avatar: styled(Image)`
    border-radius: var(--radius-full);
    background-color: var(--color-grey-800-75);
  `,
};


export default function Profile() {
  const { avatar } = useCMSSection('HeroSectionBlockRecord');
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.BorderBadge>
        <Styled.BadgeText>Bruno Tenório <WavingIcon /></Styled.BadgeText>
      </Styled.BorderBadge>
      
      <Styled.AvatarBorderInset>
        <Styled.AvatarBorderRaisedWrapper>
          <Styled.AvatarBorderRaised>
            <Styled.AvatarWrapper>
              {!isLoaded && <ImageSkeleton />}

              <Styled.Avatar
                src={avatar.url}
                width={224}
                height={224}
                priority
                alt="Foto de perfil do Bruno Tenório"
                onLoad={() => setIsLoaded(true)}
                style={{ opacity: isLoaded ? 1 : 0 }}
              />
            </Styled.AvatarWrapper>
          </Styled.AvatarBorderRaised>
        </Styled.AvatarBorderRaisedWrapper>
      </Styled.AvatarBorderInset>
    </Styled.Wrapper>
  );
}
