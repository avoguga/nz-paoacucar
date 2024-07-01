import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as C from './styles';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';
import CameraIcon from '../../../../../../main/assets/icons/small/tirar foto.svg';
import logo from '../../../../../../main/assets/icons/ant/logo horizontal 150ppi.svg';

interface FourthStepPhotoProps {
  onBackClick: () => void;
  onNextClick: (foto: string) => void;
}

const FourthStepPhoto: React.FC<FourthStepPhotoProps> = ({
  onBackClick,
  onNextClick,
}) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);

  const capturePhoto = () => {
    setCountdown(5); // Start the countdown from 5 seconds
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval);
          const imageSrc = webcamRef.current?.getScreenshot();
          if (imageSrc) {
            setCapturedPhoto(imageSrc);
            setTimeout(() => {
              onNextClick(imageSrc);
            }, 100);
          }
          return null;
        }
        return prevCountdown! - 1;
      });
    }, 1000);
  };

  return (
    <C.Container>
      <C.LogoContainer>
        <img
          src={logo}
          alt="logo"
          style={{
            width: '425px',
            height: '100px',
          }}
        />
      </C.LogoContainer>
      <C.HeaderCapture>
        <C.PhotoContainer>
          {capturedPhoto ? (
            <C.CapturedImage src={capturedPhoto} alt="Captured Photo" />
          ) : (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1200}
              height={1000}
            />
          )}
        </C.PhotoContainer>
        <C.ClickImage>
          <C.TitleCaptureImage>
            Para complementar o texto, precisamos de uma foto sua. Posicione-se
            diante da câmera e clique em FOTO. Após pressionar o botão, você
            terá 5 segundos para se preparar.
          </C.TitleCaptureImage>
          <C.CameraButton onClick={capturePhoto} disabled={countdown !== null}>
            <img src={CameraIcon} alt="Foto" />
            <h2>Foto</h2>
          </C.CameraButton>
          {countdown !== null && <C.Countdown>{countdown}</C.Countdown>}
          <C.Button onClick={onBackClick}>
            <img src={SetaEsquerda} alt="Anterior" />
            Anterior
          </C.Button>
        </C.ClickImage>
      </C.HeaderCapture>
    </C.Container>
  );
};

export default FourthStepPhoto;
