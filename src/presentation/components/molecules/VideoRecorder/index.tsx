import { useState, useRef, useEffect } from 'react';
import Play from '../../../../main/assets/icons/small/Graavr.png';
import Gravando from '../../../../main/assets/icons/small/Gravando.png';
import Stop from '../../../../main/assets/icons/small/Parar.png';
import SetaEsquerda from '../../../../main/assets/icons/small/seta esquerda.svg';
import * as C from './styles';
import PostRecordOptions from './components/PostRecorderOptions';
import logo from '../../../../main/assets/icons/ant/logo horizontal 300ppi.svg';
import Tempo from '../../../../main/assets/icons/small/relogio tempo.svg';
import ProgressBar from '@ramonak/react-progress-bar';

const mimeType = 'video/webm; codecs="opus,vp8"';

const VideoRecorder = ({ onBackClick, onConfirm, onStop, onCancel }) => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const liveVideoFeed = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState('inactive');
  const [stream, setStream] = useState(null);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);
  const [showPostRecordOptions, setShowPostRecordOptions] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [progress, setProgress] = useState(0);

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
        liveVideoFeed.current.muted = true;
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

    return () => {
      if (mediaRecorder.current && recordingStatus === 'recording') {
        mediaRecorder.current.stop();
      }

      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (recordingStatus === 'recording') {
      const interval = setInterval(() => {
        setRecordTime((prevTime) => {
          const newTime = prevTime + 1;
          setProgress((newTime / 60) * 100);
          if (newTime >= 60) {
            clearInterval(interval);
            stopRecording();
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [recordingStatus]);

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
      setRecordTime(0);
      setProgress(0);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && recordingStatus === 'recording') {
      mediaRecorder.current.stop();
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
    }
  };

  const reRecord = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    setRecordedVideo(null);
    setShowPostRecordOptions(false);
    setRecordingStatus('inactive');
    videoChunks.length = 0;

    getCameraPermission();
  };

  const confirmVideo = () => {
    console.log('Video confirmed:', recordedVideo);
    setShowPostRecordOptions(false);
    onConfirm();
  };

  const instructionMessage = () => {
    if (!recordedVideo && recordingStatus === 'inactive') {
      return (
        <>
          <h3>Posicione-se diante da câmera.</h3>
          <p>
            A câmera começará a gravar 5 segundos após você apertar no botão
            GRAVAR. Quando terminar, aperte no botão PARAR.
          </p>
        </>
      );
    } else if (recordingStatus === 'recording') {
      return (
        <>
          <h3>A gravação começou.</h3>
          <p>
            O vídeo pode ter até 1 minuto de duração. Quando terminar, aperte no
            botão <strong>PARAR</strong>.
          </p>
        </>
      );
    }
  };

  return (
    <C.RecorderContainer>
      <C.VideoArea>
        <C.LogoContainer>
          <img src={logo} alt="Logo" />
        </C.LogoContainer>
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
        <C.Instructions>{instructionMessage()}</C.Instructions>
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
        </C.Controls>
        {showPostRecordOptions && (
          <PostRecordOptions
            onConfirm={confirmVideo}
            onReRecord={reRecord}
            onCancel={onCancel}
          />
        )}
        <C.ProgressContainer>
          <C.ProgressTime>
            <img src={Tempo} alt="Tempo" />
            <span>{recordTime}</span> <div>segundos</div>
          </C.ProgressTime>
          <ProgressBar
            completed={progress}
            bgColor="#5D280D"
            borderRadius="0"
            isLabelVisible={false}
            baseBgColor="#F9B515"
            width="430px"
            height="40px"
          />
        </C.ProgressContainer>
        {recordingStatus === 'inactive' && !recordedVideo && (
          <C.NavButton onClick={onBackClick}>
            <img src={SetaEsquerda} alt="Anterior" />
            <span>Anterior</span>
          </C.NavButton>
        )}
      </C.InfoArea>
    </C.RecorderContainer>
  );
};

export default VideoRecorder;
