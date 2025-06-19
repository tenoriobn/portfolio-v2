import React from 'react';
import useOptionsList from './useOptionsList';
import { LargeBorderButton, OptionButton } from 'src/styles';
import Dropdown from 'src/components/Dropdown';

export default function OptionsList() {
  const { options, closeOptions } = useOptionsList();

  return (
    <Dropdown onClick={closeOptions}>
      {options.map(({ icon, backIcon, label, onClick }, index) => (
        <LargeBorderButton key={index}>
          <OptionButton onClick={onClick}>
            {icon}
            {label}
            {backIcon}
          </OptionButton>
        </LargeBorderButton>
      ))}
    </Dropdown>
  );
}
