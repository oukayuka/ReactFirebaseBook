import React, { FC } from 'react';
import styled from '@emotion/styled';

const WideButton: FC<{ color: string }> = ({ color, children }) => {
  const ButtonWrapper = styled.div`
    .ui.button {
      border-style: solid;
      border-width: 1px !important;
      box-shadow: 0 0 0 1px ${color} inset !important;
      font-size: 0.9rem;
      font-weight: 600;
      margin: 0.25rem 0 0.25rem;
      padding: 0.66rem 0 0.55rem;
      width: 100%;
    }

    .ui.basic.button {
      color: ${color} !important;
    }

    .ui.inverted.button {
      background: ${color} !important;
    }

    .ui.inverted.button:hover {
      color: #fff;
    }

    .ui.button:disabled {
      opacity: 0.4 !important;
    }

    .ui.icon.button > .icon {
      margin: 0 0.2rem !important;
      opacity: 1 !important;
    }

    .ui.icon.button > img {
      margin: 0 0.1rem -0.1rem !important;
    }
  `;

  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default WideButton;
