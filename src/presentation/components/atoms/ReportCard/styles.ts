import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const Container = styled.div`
  background-color: ${sg.colors.backgroundColors.colorBackgroundComentPage};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 445px;
  height: 720px;
  overflow-y: auto;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  img {
    width: 30px;
    height: 30px;
  }
  margin-bottom: 5px;
  width: 100%;
  position: absolute;
  display: flex;

  top: 5%;
  right: 9%;

  justify-content: right;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;

export const Content = styled.div`
  padding: 20px;
  border-radius: 8px;

  margin-top: 10px;
`;

export const Text = styled.p`
  font-size: 15.5px;

  color: ${sg.colors.textColors.colorTextNeutral};
`;