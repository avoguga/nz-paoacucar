import { sg } from 'presentation/styles';
import styled from 'styled-components';

interface ContainerProps {
  background?: string;
  width?: string;
  height?: string;
  color?: string;
}

export const Button = styled.button<ContainerProps>`
  width: ${({ width }) => width || '28.125rem'};
  height: ${({ height }) => height || '3.75rem'};
  background-color: ${(props) =>
    props.background || sg.colors.backgroundColors.colorBackgroundButtonOne};
  text-align: center;
  font-size: 2rem;
  color: ${({ color }) => color || sg.colors.textColors.colorTextDefault};

  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background-color: rgba(220, 147, 39, 0.8);
  }
`;
