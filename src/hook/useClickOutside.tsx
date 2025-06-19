import { RefObject, useEffect } from 'react';

/**
 * Hook customizado para detectar cliques fora de um elemento.
 * @template T - O tipo de elemento HTML que será referenciado.
 * @param ref - A referência do elemento HTML.
 * @param onClickOutSide - Função a ser executada ao clicar fora do elemento.
 * 
 * @returns {object} - { ref, onClickOutSide }
 */

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>, 
  onClickOutSide: () => void,
) {
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutSide();
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [ref, onClickOutSide]);
}