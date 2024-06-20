import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const TitleMsg = styled.h3`
  width: 500px;
  font-size: 26px;
  color: #5d280d;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const InputContainerTitle = styled.h4`
  color: #6d4702;
  font-size: 26px;
`;

export const Input = styled.input`
  background-color: #f9b515;
  width: 559px;
  font-size: 26px;
  height: 39px;
  text-align: center;
  ::placeholder {
    color: #b07600;
  }
`;

export const Button = styled.button`
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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
`;

export const InputLabel = styled.input`
  background-color: #f9b515;
  width: 20px;
  font-size: 26px;
  height: 39px;
  text-align: center;
  ::placeholder {
    color: #b07600;
  }
`;

// third steps
export const HeaderText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;

  white-space: nowrap;
  img {
    height: 75px;
  }
`;

export const VideoSection = styled.div`
  width: 100%;
  max-width: 800px;

  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  gap: 10rem;
  padding: 20px;
  border-radius: 8px;
`;

export const TextIcon = styled.img`
  align-self: flex-start;
`;
export const CharCount = styled.div`
  display: flex;
  color: ${sg.colors.textColors.colorTextDefault};
  margin-top: 10px;
  font-size: 25px;
  font-weight: 600;
`;

export const TextArea = styled.textarea`
  width: 800px;
  height: 800px;
  padding: 15px;
  border: none transparent;
  border-radius: none;
  font-size: 26px;
  font-weight: 600;
  resize: none;
  color: ${sg.colors.textColors.colorTextDefault};

  background-color: ${sg.colors.backgroundColors
    .colorBackgroundFieldTextGeneral};
  &::placeholder {
    color: ${sg.colors.textColors.colorTextDefault};
  }
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
export const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 70rem;
`;

// QUARTO PASSO

export const WebcamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  border-radius: 10px; /* Ajuste conforme necessário */
  overflow: hidden;
`;
export const LogoContainer = styled.div`
  position: absolute;
  top: 2%;
  left: 5%;
`;
export const CameraButton = styled.button`
  display: flex;
  align-items: center;

  flex-direction: column;
  background-color: transparent;
  color: #5d280d;

  font-weight: bold;

  h2 {
    font-size: 40px;
    margin-bottom: 8rem;
    margin-top: 15px;
  }

  img {
    border-radius: 50px;
    width: 180px;
    height: 178px;
    margin-top: 3rem;
  }
`;

export const TitleCaptureImage = styled.h2`
  width: 80%;
  font-size: 26px;
  color: #5d280d;
  text-align: center;
`;

export const HeaderCapture = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ClickImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

//QUINTO PASSO

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;

  background-color: #fff;

  overflow: hidden;
`;

export const CapturedImage = styled.img`
  width: 100%;
  height: 672px;
`;
export const FiveStepGroup = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  h3 {
    width: 70%;
    font-size: 26px;
    color: #5d280d;
    margin-bottom: 25px;
    text-align: center;
    letter-spacing: -0.49px;
  }
  span {
    font-weight: 600;
    font-size: 50px;
  }
`;

export const FiveStepButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: transparent;
  color: #5d280d;
  font-weight: bold;
  border: none;
  cursor: pointer;
  gap: 5px;
  margin: 35px;

  h2 {
    font-size: 34px;
    white-space: nowrap;
    margin: 0;

    margin-left: 25px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;
