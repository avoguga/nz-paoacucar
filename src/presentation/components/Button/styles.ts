import { sg } from 'presentation/styles';
import styled from 'styled-components';
interface ContainerProps {
  background: string;
}
export const Container = styled.button<ContainerProps>`
  width: 490px;
  height: 60px;
  background-color: ${(props) =>
    props.background || sg.colors.backgroundColors.colorBackgroundButtonOne};
  text-align: center;
  font-size: 35px;
  color: ${sg.colors.textColors.colorTextNeutral};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
