import React, { FC, useState } from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic.d';
import WideButton from './WideButton';

type ToggleButtonProps = {
  color: string;
  buttonTexts: string[];
  icons: SemanticICONS[];
  initialActive?: boolean;
  toggle?: () => void;
};

const ToggleButton: FC<ToggleButtonProps> = ({
  color,
  buttonTexts = [],
  icons,
  initialActive = false,
  toggle = () => {},
}) => {
  const [isActive, setIsActive] = useState<boolean>(initialActive);
  const handleClick = () => {
    toggle();
    setIsActive(value => !value);
  };

  return (
    <WideButton color={color}>
      <Button icon basic={!isActive} inverted={isActive} onClick={handleClick}>
        <Icon name={isActive ? icons[0] : icons[1]} />
        {isActive ? buttonTexts[0] : buttonTexts[1]}
      </Button>
    </WideButton>
  );
};

export default ToggleButton;
