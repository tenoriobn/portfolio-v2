/* eslint-disable no-console */
import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { isActiveContactState } from 'src/lib';


export const useContactActions = () => {
  const setActiveContactId = useSetRecoilState(isActiveContactState);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    dropdownRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, []);

  const handleOptionClick = async (href: string, isCopy: boolean) => {
    if (isCopy) {
      await copyToClipboard(href);
    }
    setActiveContactId(null);
  };

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Copiado com sucesso!');
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  return {
    handleOptionClick,
    dropdownRef
  };
};