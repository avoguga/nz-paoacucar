import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  height: 100vh;
  gap: 25px;
  padding: 50px;
  width: 100%;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TextProfile = styled.aside`
  display: flex;
  flex-direction: column;
  height: 50rem;
  justify-content: space-between;
  align-items: center;
`;
export const TextImageGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 25px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  width: 420px;
  height: 90px;
`;

export const RelatoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const VideoPlayer = styled.video`
  width: 1300px;
  height: 730px;
  object-fit: cover;
`;

export const ProfileText = styled.h2`
  font-size: 34px;
  color: ${sg.colors.textColors.colorTextDefault};

  text-align: left;

  font-family: 'myFont', sans-serif;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  img {
    width: 30px;
    height: 30px;
  }
  margin-bottom: 5px;
  width: 100%;
  display: flex;
  top: 5%;
  right: 9%;
  justify-content: right;
`;
