import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  height: 100%;
  display: flex;

  flex-direction: column;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 350px;
`;

export const HomeIcon = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  font-size: 20px;
  img {
    width: 70px;
    height: 70px;
  }
`;

export const TestimonialContent = styled.div`
  overflow-y: scroll;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;
