import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as C from './styles';
import SetaEsquerda from '../../../../../../main/assets/icons/small/Seta_esquerda.png';
import CameraIcon from '../../../../../../main/assets/icons/small/Foto_1.png';
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
  const [countdown, setCountdown] = useState(5);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedPhoto(imageSrc);
      setTimeout(() => {
        onNextClick(imageSrc);
      }, 100);
    }
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
        <C.WebcamContainer>
          {capturedPhoto ? (
            <C.CapturedImage src={capturedPhoto} alt="Captured Photo" />
          ) : (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              onUserMedia={() => setCountdown(5)}
              width={1000}
              height={1000}
            />
          )}

          <C.ClickImage>
            <C.TitleCaptureImage>
              Para complementar o texto, precisamos de uma foto sua.
              Posicione-se diante da câmera e clique em FOTO. Após pressionar o
              botão, você terá 5 segundos para se preparar.
            </C.TitleCaptureImage>
            <C.CameraButton onClick={capturePhoto}>
              <img src={CameraIcon} alt="Foto" />
              <h2>Foto</h2>
            </C.CameraButton>
            <C.Button onClick={onBackClick}>
              <img src={SetaEsquerda} alt="Anterior" />
              Anterior
            </C.Button>
          </C.ClickImage>
        </C.WebcamContainer>
      </C.HeaderCapture>
      <C.FooterText></C.FooterText>
    </C.Container>
  );
};

export default FourthStepPhoto;
