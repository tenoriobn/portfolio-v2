import { BorderButton, CircularButton, DropdownList, DropdownWrapper } from 'src/styles';
import { DropdownProps } from './dropdown.type';
import styled from 'styled-components';
import CloseIcon from 'public/icons/close.svg';
import ArrowRightIcon from 'public/icons/arrow-right.svg';

const Styled = {
  DropdownWrapper: styled(DropdownWrapper)`
    left: 12px;
    top: 90px;
    width: 232px;
  `,

  DropdownList: styled(DropdownList)`
    padding: .75rem 1rem 1rem 1rem;

    @media (min-width: 768px) {
      padding: .75rem 1.5rem 1.5rem 1.5rem;
    }
  `,

  BorderButton: styled(BorderButton)<{ $closeIcon?: boolean }>`
    justify-self: ${({ $closeIcon}) => $closeIcon ? 'end' : ''};
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

export default function Dropdown({ children, closeIcon, onClick, ...rest }: DropdownProps) {

  return (
    <Styled.DropdownWrapper {...rest}>
      <Styled.DropdownList>
        <Styled.BorderButton $closeIcon={closeIcon}>
          <Styled.CircularButton onClick={onClick}>
            {closeIcon ? <Styled.CloseIcon /> : <Styled.ArrowLeftIcon />}
          </Styled.CircularButton>
        </Styled.BorderButton>

        {children}
      </Styled.DropdownList>
    </Styled.DropdownWrapper>
  );
}