import React from 'react';
import * as C from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  backgroundColor: string;
  width?: string;
  height?: string;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({
  text,
  backgroundColor,
  width,
  height,
  onClick,
  ...props
}) => {
  return (
    <C.Button
      onClick={onClick}
      width={width}
      height={height}
      background={backgroundColor}
      {...props}
    >
      {text}
    </C.Button>
  );
};

export default Button;
