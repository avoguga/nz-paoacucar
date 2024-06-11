import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const RecorderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  padding: 20px;
  border-radius: 8px;
`;

export const Instructions = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #5d280d;

  h3 {
    width: 450px;

    font-size: 26px;
    margin-bottom: 10px;
  }

  p {
    width: 450px;

    font-size: 26px;
  }
`;

export const VideoArea = styled.div`
  width: 1192px;
  height: 671px;
  margin-bottom: 20px;

  .live-player,
  .recorded {
    width: 100%;
    height: 100%;
    background-color: black;
    object-fit: cover;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5d280d;

  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  color: ${sg.colors.textColors.colorTextNeutral};
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  color: #5d280d;
  font-size: 37px;
  font-weight: bold;
  img {
    width: 20px;
    height: 20px;
  }
`;
