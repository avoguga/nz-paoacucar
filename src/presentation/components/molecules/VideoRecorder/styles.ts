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

  .recorded-player {
    width: 100%;
    height: 100%;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(139, 69, 19, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoPlayer = styled.video<{ isPlaying?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  visibility: ${(props) => (!props.isPlaying ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(93, 40, 13, 0.6);

  span {
    color: #fff;
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;

export const PlayButton = styled.button`
  width: 20rem;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 13rem;
    height: 13rem;
  }
`;

export const Countdown = styled.div`
  font-size: 80px;
  color: #ffffff;
  font-weight: bold;
  position: absolute;
  top: 20%;
  width: 160px;
  height: 160px;
  text-align: center;
  right: 35%;
  background-color: #7a5c47;
  padding: 35px 30px;
  border-radius: 50%;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 17%;
  transform: translateX(-50%);
  z-index: 1;

  img {
    width: 420px;
    height: 93px; // Ajuste o tamanho conforme necessário
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row; /* Ajustado para linha */
  justify-content: center; /* Centraliza os botões */
  gap: 30px;
  flex-wrap: wrap; /* Permite que os botões quebrem para a próxima linha, se necessário */
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5d280d;
  gap: 10px;
  margin: 10px;

  span {
    font-size: 30px;
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
  font-size: 5rem;

  img {
    width: 150px;
    height: 150px;
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
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const ProgressTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-left: 30px;
  color: #5d280d;
  font-size: 2rem;
  font-weight: bolder;

  // First child
  img {
    width: 2rem;
    height: 2rem;
  }

  // Second child
  span {
    font-size: 5rem;
    margin-left: 0.2rem;
  }

  // Third child
  div {
    font-size: 2rem;
    margin-left: 1rem;
    font-weight: bold;
  }
`;
