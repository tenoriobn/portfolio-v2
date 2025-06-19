import { shadowSM, borderInsetMixin, CircularButton, BorderButton } from 'src/styles';
import { DropdownProps } from './dropdown.type';
import { slideFadeDown } from 'src/utils';
import styled from 'styled-components';
import { motion } from 'motion/react';
import CloseIcon from 'public/icons/close.svg';
import ArrowRightIcon from 'public/icons/arrow-right.svg';
import useOptionsList from 'src/sections/Header/OptionsPanel/OptionsList/useOptionsList';

const Styled = {
  DropdownWrapper: styled(motion.div)`
    border-radius: ${({ theme }) => theme.borderRadius.md};
    left: 12px;
    top: 90px;
    ${borderInsetMixin}
    ${shadowSM}
    position: absolute;
    width: 232px;
  `,

  DropdownList: styled.div`
    display: grid;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: .75rem 1rem 1rem 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: .75rem 1.5rem 1.5rem 1.5rem;
    }
  `,

  CircularButton: styled(CircularButton)`
    width: 32px;
    height: 32px;
  `,

  CloseIcon: styled(CloseIcon)`
    path {
      transform: scale(0.6);
      transform-origin: center;
      stroke-width: 3px;
    }
  `,
  
  ArrowLeftIcon: styled(ArrowRightIcon)`
    position: relative;
    right: 1px;
    
    path {
      transform: scaleX(-1) scale(0.8);
      transform-origin: center;
    }
  `,
};

export default function Dropdown({ onClick, children }: DropdownProps) {
  const { isActiveOption } = useOptionsList();

  return (
    <Styled.DropdownWrapper {...slideFadeDown}>
      <Styled.DropdownList>
        <BorderButton>
          <Styled.CircularButton onClick={onClick}>
            {isActiveOption === 'main' ? <Styled.CloseIcon /> : <Styled.ArrowLeftIcon />}
          </Styled.CircularButton>
        </BorderButton>

        {children}
      </Styled.DropdownList>
    </Styled.DropdownWrapper>
  );
}
