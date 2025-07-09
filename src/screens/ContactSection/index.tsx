import { useCMSSection } from 'src/hook';
import {borderRaisedMixin, Description, Section, shadowSM, Title, Wrapper } from 'src/styles';
import TalkingIcon from 'public/icons/talking.svg';
import styled from 'styled-components';
import SocialContactList from './SocialContactList';
import WinkingFaceIcon from 'public/icons/winking-face.svg';
import { revealOnScroll } from 'src/utils';

const Styled = {
  IconWrapper: styled.div`
    ${borderRaisedMixin}
    ${shadowSM}
    border-radius: var(--radius-full);
    width: 100px;
    height: 100px;
  `,

  ContactIcon: styled(TalkingIcon)`
    background-color: var(--color-grey-800-75);
    border-radius: var(--radius-full);
  `,

  WinkingFaceIcon: styled(WinkingFaceIcon)`
    height: 1.25rem;
    margin-left: .125rem;
    vertical-align: middle;
  `,
};

export default function ContactSection() {
  const { componentName, title, description } = useCMSSection('ContactSectionBlockRecord');

  return (
    <Wrapper {...revealOnScroll}>
      <Section id={componentName}>
        <Styled.IconWrapper>
          <Styled.ContactIcon />
        </Styled.IconWrapper>
        
        <Title>{title}</Title>
        <Description>{description} <Styled.WinkingFaceIcon /></Description>

        <SocialContactList />
      </Section>
    </Wrapper>
  );
}
