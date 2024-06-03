import React from 'react';
import * as C from './styles';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({
  children,
  backgroundColor,
  width,
  height,
  onClick,
  textColor,
  ...props
}) => {
  return (
    <C.Button
      onClick={onClick}
      width={width}
      height={height}
      background={backgroundColor}
      color={textColor}
      {...props}
    >
      {children}
    </C.Button>
  );
};

export default Button;
