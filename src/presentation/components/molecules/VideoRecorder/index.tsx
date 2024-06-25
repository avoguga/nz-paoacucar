import { useState, useRef, useEffect } from 'react';
import Play from '../../../../main/assets/icons/small/Graavr.png';
import Gravando from '../../../../main/assets/icons/small/Gravando.png';
import Stop from '../../../../main/assets/icons/small/Parar.png';
import Confirmar from '../../../../main/assets/icons/small/Confirmar.png';
import ReGravar from '../../../../main/assets/icons/small/Regravar-Outra_foto.png';
import Cancelar from '../../../../main/assets/icons/small/Fechar.png';
import SetaEsquerda from '../../../../main/assets/icons/small/Seta_esquerda.png';
import * as C from './styles';

const mimeType = 'video/webm; codecs="opus,vp8"';

const VideoRecorder = ({ onBackClick, onConfirm, onStop }) => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const liveVideoFeed = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [stream, setStream] = useState(null);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);
  const [showPostRecordOptions, setShowPostRecordOptions] = useState(false);
  const [recordTime, setRecordTime] = useState(0);

  async function getCameraPermission() {
    if ('MediaRecorder' in window) {
      try {
        const videoConstraints = { audio: true, video: true };
        const mediaStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );
        setPermission(true);
        setStream(mediaStream);
        liveVideoFeed.current.srcObject = mediaStream;
        liveVideoFeed.current.muted = true; // Mute the local feedback
      } catch (err) {
        console.error('Failed to get media stream:', err);
        alert(err.message);
      }
    } else {
      alert('The MediaRecorder API is not supported in your browser.');
    }
  }
  useEffect(() => {
    getCameraPermission();

    // Função de limpeza chamada quando o componente é desmontado
    return () => {
      if (mediaRecorder.current && recordingStatus === 'recording') {
        mediaRecorder.current.stop(); // Garantir que a gravação pare
      }

      // Parar todas as faixas do stream
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const startRecording = () => {
    if (stream && recordingStatus === 'inactive') {
      setRecordingStatus('recording');
      const media = new MediaRecorder(stream, { mimeType });
      mediaRecorder.current = media;
      mediaRecorder.current.start();
      const localVideoChunks = [];
      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          localVideoChunks.push(event.data);
        }
      };
      setVideoChunks(localVideoChunks);
      // Iniciar a contagem do tempo de gravação
      setRecordTime(0);
      const interval = setInterval(() => {
        setRecordTime((prevTime) => {
          if (prevTime < 60) return prevTime + 1;
          clearInterval(interval);
          return prevTime;
        });
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && recordingStatus === 'recording') {
      mediaRecorder.current.onstop = () => {
        const videoBlob = new Blob(videoChunks, { type: mimeType });
        setRecordedVideo(URL.createObjectURL(videoBlob));
        setVideoChunks([]);
        setShowPostRecordOptions(true);
        setRecordingStatus('inactive');

        if (onStop) {
          console.log(videoBlob);
          onStop(videoBlob);
        }
      };

      mediaRecorder.current.stop();
    }
  };

  const reRecord = () => {
    if (stream) {
      // Parar o stream existente para reiniciar a câmera
      stream.getTracks().forEach((track) => track.stop());
    }

    setRecordedVideo(null);
    setShowPostRecordOptions(false);
    setRecordingStatus('inactive');
    videoChunks.length = 0; // Limpa os chunks de vídeo antigos

    // Reobtém o acesso à câmera
    getCameraPermission();
  };

  const confirmVideo = () => {
    console.log('Video confirmed:', recordedVideo);
    setShowPostRecordOptions(false);
    onConfirm();
  };

  return (
    <C.RecorderContainer>
      <C.VideoArea>
        {!recordedVideo ? (
          <video
            ref={liveVideoFeed}
            autoPlay
            muted
            className="live-player"
          ></video>
        ) : (
          <div className="recorded-player">
            <video className="recorded" src={recordedVideo} controls></video>
            <a download href={recordedVideo}>
              Download Recording
            </a>
          </div>
        )}
      </C.VideoArea>
      <C.InfoArea>
        <C.Instructions>
          <h3>Posicione-se diante da câmera.</h3>
          <p>
            A câmera começará a gravar 5 segundos após você apertar no botão
            GRAVAR. Quando terminar, aperte no botão PARAR.
          </p>
        </C.Instructions>
        <C.Controls>
          {permission &&
            recordingStatus === 'inactive' &&
            !showPostRecordOptions && (
              <>
                <C.ButtonContainer>
                  <C.Button onClick={startRecording} type="button">
                    <img src={Play} alt="Gravar" />
                  </C.Button>
                  <span>Gravar</span>
                </C.ButtonContainer>
                <C.ButtonContainer>
                  <C.Button onClick={stopRecording} type="button">
                    <img src={Stop} alt="Parar" />
                  </C.Button>
                  <span>Parar</span>
                </C.ButtonContainer>
              </>
            )}
          {recordingStatus === 'recording' && (
            <>
              <C.ButtonContainer>
                <C.Button type="button" disabled>
                  <img src={Gravando} alt="Gravando" />
                </C.Button>
                <span>Gravando</span>
              </C.ButtonContainer>
              <C.ButtonContainer>
                <C.Button onClick={stopRecording} type="button">
                  <img src={Stop} alt="Parar" />
                </C.Button>
                <span>Parar</span>
              </C.ButtonContainer>
            </>
          )}
          <>
            <C.ButtonContainer>
              <C.Button onClick={confirmVideo} type="button">
                <img src={Confirmar} alt="Confirmar" />
              </C.Button>
              <span>Confirmar</span>
            </C.ButtonContainer>
            <C.ButtonContainer>
              <C.Button onClick={reRecord} type="button">
                <img src={ReGravar} alt="Regravar" />
              </C.Button>
              <span>Regravar</span>
            </C.ButtonContainer>
            <C.ButtonContainer>
              <C.Button
                onClick={() => setShowPostRecordOptions(false)}
                type="button"
              >
                <img src={Cancelar} alt="Cancelar" />
              </C.Button>
              <span>Cancelar</span>
            </C.ButtonContainer>
          </>
        </C.Controls>
        <C.NavButton onClick={onBackClick}>
          <img src={SetaEsquerda} alt="Anterior" />
          <span>Anterior</span>
        </C.NavButton>
      </C.InfoArea>
    </C.RecorderContainer>
  );
};

export default VideoRecorder;
