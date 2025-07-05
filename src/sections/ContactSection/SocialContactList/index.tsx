import styled from 'styled-components';
import Image from 'next/image';
import { useCMSSection } from 'src/hook';
import { BaseButton, BorderButton, OverflowAnimationFixed, transitionThemeAnimation } from 'src/styles';
import ContactDropdown from './ContactDropdown';
import { useSocialContactList } from './SocialContactList';
import { AnimatePresence } from 'motion/react';
import DarkModeAnimate from 'src/components/DarkModeAnimate';

const Styled = {
  ContactsGrid: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: max-content;
    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  ContactItemWrapper: styled.div`
    position: relative;
    max-width: 180px;
    width: 100%;
  `,

  ContactBorderButton: styled(BorderButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
      max-width: 180px;
      width: 100%;
   
    &:active {
      background: ${({ theme }) => theme.gradient['grey-light-dark-reserve']};
    }
  `,

  ContactButton: styled(BaseButton)`
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    padding: 1rem 1.5rem;
    max-width: 180px;
    width: 100%;
    position: relative;
    z-index: 5;
    ${transitionThemeAnimation}
  `,

  Label: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    color: ${({ theme }) => theme.colors['grey-500']};
    position: relative;
    z-index: 5;
  `,
};

export default function SocialContactList() {
  const { socialLink } = useCMSSection('ContactSectionBlockRecord');
  const { dropdownRef, toggleContact, isContactActive } = useSocialContactList();

  return (
    <Styled.ContactsGrid >
      {socialLink.map(({ id, linkName, icon, dropdown }) => (
        <Styled.ContactItemWrapper key={id} ref={isContactActive(id) ? dropdownRef : null}>
          <Styled.ContactBorderButton>
            <Styled.ContactButton onClick={() => toggleContact(id)}>
              <OverflowAnimationFixed>
                <DarkModeAnimate position="fixed" background="grey-800-75%" />
              </OverflowAnimationFixed>
              <Styled.Label>
                <Image src={icon.url} alt={`${linkName} icon`} width={20} height={20} />
                {linkName}
              </Styled.Label>
            </Styled.ContactButton>
          </Styled.ContactBorderButton>

          <AnimatePresence mode="wait" initial={false}>
            {isContactActive(id) && (<ContactDropdown dropdown={dropdown} linkName={linkName} />)}
          </AnimatePresence>
        </Styled.ContactItemWrapper>
      ))}
    </Styled.ContactsGrid>
  );
}