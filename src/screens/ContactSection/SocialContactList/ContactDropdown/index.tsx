import { DropdownList, DropdownWrapper, LargeBorderButton, OptionButton } from 'src/styles';
import styled from 'styled-components';
import Image from 'next/image';
import { slideFadeDown } from 'src/utils';
import { useContactActions } from './useContactActions';
import { ContactDropdownProps } from './contactDropdown.type';

const Styled = {
  DropdownWrapper: styled(DropdownWrapper)<{$linkName: string}>`
    top: 70px;
    z-index: 1;
    ${({ $linkName }) => ($linkName === 'Whatsapp' ? 'right: 0;' : 'left: 0;')}
  `,

  DropdownList: styled(DropdownList)`
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,
};

export default function ContactDropdown({ dropdown, linkName }: ContactDropdownProps) {
  const { handleOptionClick, dropdownRef } = useContactActions();

  return (
    <Styled.DropdownWrapper 
      ref={dropdownRef} 
      $linkName={linkName}
      animate='animate'
      initial="initial"
      exit='exit'
      variants={slideFadeDown}
    >
      <Styled.DropdownList>
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
      </Styled.DropdownList>
    </Styled.DropdownWrapper>
  );
}
