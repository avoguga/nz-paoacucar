import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const Container = styled.div`
  background-color: ${sg.colors.backgroundColors.colorBackgroundComentPage};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 445px;
  height: 730px;
  overflow-y: auto;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: fit-content;
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
  right: 5.5%;
  justify-content: right;
`;

export const Content = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
  color: ${sg.colors.textColors.colorTextNeutral};
`;

export const Text = styled.p`
  font-size: 15.5px;
  margin-bottom: 10px;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${sg.colors.backgroundColors.colorBackgroundFieldTextUser};
  margin: 1.5rem 0;
`;

export const Comment = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 15px;
  }

  span {
    font-size: 0.75;
  }
`;
