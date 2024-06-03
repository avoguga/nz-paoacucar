import { sg } from 'presentation/styles';
import styled from 'styled-components';
interface ContainerProps {
  background: string;
}
export const Button = styled.button<ContainerProps>`
  width: ${({ width }) => width || '28.125rem'};
  height: ${({ height }) => height || '3.5rem'};
  background-color: ${(props) =>
    props.background || sg.colors.backgroundColors.colorBackgroundButtonOne};
  text-align: center;
  font-size: 2.188rem;
  color: ${sg.colors.textColors.colorTextNeutral};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-items: center;
  justify-content: center;
`;
