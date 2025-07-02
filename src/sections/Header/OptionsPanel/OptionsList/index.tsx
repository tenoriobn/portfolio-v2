import React from 'react';
import useOptionsList from './useOptionsList';
import { LargeBorderButton, OptionButton } from 'src/styles';
import { slideFadeDown } from 'src/utils';
import Dropdown from 'src/components/Dropdown';

export default function OptionsList() {
  const { isActiveOption, options, closeOptions } = useOptionsList();

  return (
    <>    
      <Dropdown 
        closeIcon={true} 
        onClick={closeOptions}
        animate={isActiveOption ? 'animate' : 'exit'}
        initial="initial"
        exit='exit'
        variants={slideFadeDown}
      >
        {options.map(({ icon, backIcon, label, onClick }) => (
          <LargeBorderButton key={label}>
            <OptionButton onClick={onClick}>
              {icon}
              {label}
              {backIcon}
            </OptionButton>
          </LargeBorderButton>
        ))}
      </Dropdown>
    </>
  );
}
