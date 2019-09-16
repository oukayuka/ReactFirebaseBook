import React, { FC } from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic.d';
import WideButton from './WideButton';

type LinkButtonProps = {
  color: string;
  link?: string;
  icon?: SemanticICONS;
  iconElement?: JSX.Element;
  disabled?: boolean;
};

const LinkButton: FC<LinkButtonProps> = ({
  link,
  color,
  icon,
  iconElement,
  disabled = false,
  children,
}) => {
  const button = (
    <WideButton color={color}>
      <Button icon basic disabled={disabled}>
        {iconElement || <Icon name={icon} />}
        {children}
      </Button>
    </WideButton>
  );

  return link && !disabled ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {button}
    </a>
  ) : (
    button
  );
};

export default LinkButton;
