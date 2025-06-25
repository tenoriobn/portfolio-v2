import { LargeBorderButton, OptionButton } from 'src/styles';
import { shadowSM, borderInsetMixin } from 'src/styles';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'motion/react';
import { slideFadeDown } from 'src/utils';
import { useContactActions } from './useContactActions';
import { ContactDropdownProps } from './contactDropdown.type';

const Styled = {
  DropdownContainer: styled(motion.div)<{$linkName: string}>`
    border-radius: ${({ theme }) => theme.borderRadius.md};
    ${borderInsetMixin}
    ${shadowSM}
    top: 70px;
    position: absolute;
    width: max-content;
    z-index: 1;

    @media (max-width: 767px) {
      ${({ $linkName }) => ($linkName === 'Whatsapp' ? 'right: 0;' : 'left: 0;')}
    }

    @media (min-width: 768px) {
      top: 78px;
    }
  `,

  DropdownContent: styled.div`
    display: grid;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors['grey-800-75%']};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1.5rem;
    }
  `,
};

export default function ContactDropdown({ dropdown, linkName }: ContactDropdownProps) {
  const { handleOptionClick, dropdownRef } = useContactActions();

  return (
    <Styled.DropdownContainer {...slideFadeDown} ref={dropdownRef} $linkName={linkName}>
      <Styled.DropdownContent>
        {dropdown.map(({ text, href, icon, iscopy }) => (
          <LargeBorderButton key={text}>
            <OptionButton
              as={!iscopy ? 'a' : 'button'}
              href={iscopy ? undefined : href}
              target={iscopy ? undefined : '_blank'}
              rel={iscopy ? undefined : 'noopener noreferrer'}
              onClick={() => handleOptionClick(href, iscopy)}
            >
              <Image src={icon.url} alt="" width={20} height={20} />
              {text}
            </OptionButton>
          </LargeBorderButton>
        ))}
      </Styled.DropdownContent>
    </Styled.DropdownContainer>
  );
}
