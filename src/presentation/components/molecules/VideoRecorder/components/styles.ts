import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const RecorderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  padding: 20px;
  border-radius: 8px;
`;

export const Instructions = styled.div`
  text-align: center;
  justify-content: baseline;
  margin-left: 35px;
  margin-bottom: 20px;
  color: #5d280d;
  letter-spacing: 1.49px;

  h2 {
    font-size: 40px;
    margin-bottom: 10px;
  }

  h3 {
    width: 450px;
    font-size: 26px;
    margin-bottom: 10px;
  }

  p {
    width: 480px;
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

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* Permite que os botões quebrem para a próxima linha, se necessário */
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #5d280d;
  gap: 1rem;
  margin: 1rem;

  span {
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
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
  font-size: 5rem;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Alinha centralmente */
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

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const PostRecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 35px;
  margin-bottom: 20px;
  color: #5d280d;
  letter-spacing: 1.49px;
  height: 100%;

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    width: 32.25rem;
    font-size: 24px;
    text-align: center;
  }
`;
