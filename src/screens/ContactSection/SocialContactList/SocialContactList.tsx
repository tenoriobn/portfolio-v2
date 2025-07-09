import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useClickOutside } from 'src/hook';
import { isActiveContactState } from 'src/lib';

export const useSocialContactList = () => {
  const [activeContactId, setActiveContactId] = useRecoilState(isActiveContactState);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const closeDropdown = () => setActiveContactId(null);
  
  useClickOutside(dropdownRef, closeDropdown);
  
  const toggleContact = (contactId: string) => {
    setActiveContactId(prev => prev === contactId ? null : contactId);
    
  };
  
  const isContactActive = (contactId: string) => activeContactId === contactId;
  
  return {
    activeContactId,
    dropdownRef,
    toggleContact,
    closeDropdown,
    isContactActive,
  };
};