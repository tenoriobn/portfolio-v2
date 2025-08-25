import styled from 'styled-components';
import Image from 'next/image';
import { useCMSSection } from 'src/hooks';
import { BaseButton, BorderButton } from 'src/styles';
import ContactDropdown from './ContactDropdown';
import { useSocialContactList } from './SocialContactList';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { IconSkeleton } from 'src/components/skeleton';

const Styled = {
  ButtonGroup: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: max-content;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }
  `,

  Item: styled.div`
    position: relative;
    max-width: 180px;
    width: 100%;
  `,

  Border: styled(BorderButton)`
    border-radius: var(--radius-full);
      max-width: 180px;
      width: 100%;
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
  `,
};

export default function SocialContactList() {
  const { socialLink } = useCMSSection('ContactSectionBlockRecord');
  const { dropdownRef, toggleContact, isContactActive } = useSocialContactList();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Styled.ButtonGroup >
      {socialLink.map(({ id, linkName, icon, dropdown }) => (
        <Styled.Item key={id} ref={isContactActive(id) ? dropdownRef : null}>
          <Styled.Border>
            <Styled.Button onClick={() => toggleContact(id)}>
              {!isLoaded && <IconSkeleton $width={20} $height={20} />}

              <Image 
                src={icon.url} 
                alt={`${linkName} icon`} 
                width={20} 
                height={20} 
                priority
                onLoad={() => setIsLoaded(true)}
                style={{ display: isLoaded ? 'block' : 'none' }}
              
              />
              {linkName}
            </Styled.Button>
          </Styled.Border>

          <AnimatePresence mode="wait" initial={false}>
            {isContactActive(id) && (<ContactDropdown dropdown={dropdown} linkName={linkName} />)}
          </AnimatePresence>
        </Styled.Item>
      ))}
    </Styled.ButtonGroup>
  );
}