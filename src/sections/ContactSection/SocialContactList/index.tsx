import styled from 'styled-components';
import Image from 'next/image';
import { useCMSSection } from 'src/hook';
import { BaseButton, BorderButton } from 'src/styles';
import ContactDropdown from './ContactDropdown';
import { useSocialContactList } from './SocialContactList';

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
              <Image src={icon.url} alt={`${linkName} icon`} width={20} height={20} />
              {linkName}
            </Styled.ContactButton>
          </Styled.ContactBorderButton>

          {isContactActive(id) && (<ContactDropdown dropdown={dropdown} linkName={linkName} />)}
        </Styled.ContactItemWrapper>
      ))}
    </Styled.ContactsGrid>
  );
}