import { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as C from './styles';
import logo from '../../../../../main/assets/icons/ant/logo horizontal 150ppi.svg';
import volumeIcon from '../../../../../main/assets/icons/small/som.svg';
import playIcon from '../../../../../main/assets/icons/small/video branco.svg';
import chatIcon from '../../../../../main/assets/icons/small/conversa.svg';
import ReportCard from 'presentation/components/atoms/ReportCard';
import close from '../../../../../main/assets/icons/small/Fechar.svg';

interface Comment {
  nome: string;
  data: string;
  comentario: string;
}

interface Depoimento {
  id: string;
  type: 'text' | 'video';
  videoUrl: string;
  nome: string;
  comments: Comment[];
}

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [depoimento, setDepoimento] = useState<Depoimento | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const fetchDepoimento = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/depoimentos/${id}`
      );
      const data = response.data;
      setDepoimento({
        id: data._id,
        type: 'video',
        videoUrl: data.videoUrl,
        nome: data.nome,
        comments: data.comentarios || [],
      });
    } catch (error) {
      console.error('Erro ao buscar depoimento:', error);
      setError('Erro ao buscar depoimento.');
    }
  }, [id]);

  useEffect(() => {
    fetchDepoimento();
  }, [id, fetchDepoimento]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = volume;
      video.ontimeupdate = () => {
        setProgress((video.currentTime / video.duration) * 100);
      };
      video.onended = () => {
        setIsPlaying(false);
        video.currentTime = 0;
      };
    }
  }, [volume]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const newTime = (Number(e.target.value) / 100) * video.duration;
      video.currentTime = newTime;
      setProgress(Number(e.target.value));
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!depoimento) {
    return <div>Carregando...</div>;
  }

  return (
    <C.Container>
      <C.HeaderContainer>
        <C.Logo src={logo} alt="Logo" />

        <C.CloseButton onClick={() => navigate('/relatos')}>
          <img src={close} alt="Close" />
        </C.CloseButton>
      </C.HeaderContainer>

      <C.Content>
        <C.RelatoContent>
          <C.VideoWrapper>
            <C.VideoPlayer
              ref={videoRef}
              src={depoimento.videoUrl}
              isPlaying={isPlaying}
              onClick={handlePlayPause}
            />
            <C.Overlay isPlaying={isPlaying} onClick={handlePlayPause}>
              {!isPlaying && (
                <C.PlayButton>
                  <img src={playIcon} alt="Play" />
                </C.PlayButton>
              )}
            </C.Overlay>
            <C.VolumeContainer>
              <C.VolumeIcon>
                <img src={volumeIcon} alt="Volume" />
              </C.VolumeIcon>
              <C.VolumeSlider
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
              />
            </C.VolumeContainer>
            <C.ProgressBar
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
            />
          </C.VideoWrapper>
          <C.ProfileText>{depoimento.nome}</C.ProfileText>
        </C.RelatoContent>
        <ReportCard
          closeButton={false}
          icon={chatIcon}
          content={depoimento.nome}
          initialComments={depoimento.comments}
          depoimentoId={depoimento.id}
          fetchDepoimento={fetchDepoimento}
        />
      </C.Content>
    </C.Container>
  );
};

export default VideoDetail;
