import React from 'react';
import * as C from './styles';

interface IButton {
  text: string;
  background: string;
}

const Button: React.FC<IButton> = ({ text, background }) => {
  return <C.Container background={background}>{text}</C.Container>;
};

export default Button;
