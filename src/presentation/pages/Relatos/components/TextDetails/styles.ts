import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  height: 100%;
  gap: 25px;
  padding: 20px;
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
  width: 344px;
  height: 317px;
`;

export const Image = styled.img`
  width: 400px;
  height: 230px;
  object-fit: cover;
`;

export const TextIcon = styled.img`
  width: 95px;
  height: 76px;
  margin-left: auto;
  margin-bottom: 10px;
`;

export const RelatoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  max-width: 50rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${sg.colors.backgroundColors
    .colorBackgroundFieldTextGeneral};
  width: 50rem;
  height: 50rem;
  overflow-y: scroll;
`;

export const Text = styled.p`
  font-size: 26px;
  color: ${sg.colors.textColors.colorTextDefault};
  margin: 50px;
  text-align: left;
  letter-spacing: -0.49px;
  font-family: 'myFont', sans-serif;
  font-weight: 500;
`;

export const ProfileText = styled.h2`
  font-size: 34px;
  color: ${sg.colors.textColors.colorTextDefault};

  text-align: left;

  font-family: 'myFont', sans-serif;
`;
