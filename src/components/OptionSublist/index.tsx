import React from 'react';
import { ArrowLeftIcon, ButtonBorder, ListOptions, SmallButtonDropdown } from 'src/styles';
import { OptionSublistProps } from './optionSublist.type';

export default function OptionSublist({ onBack, children }: OptionSublistProps) {
  return (
    <ListOptions>
      <ButtonBorder onClick={onBack}>
        <SmallButtonDropdown>
          <ArrowLeftIcon />
        </SmallButtonDropdown>
      </ButtonBorder>

      {children}
    </ListOptions>
  );
}
