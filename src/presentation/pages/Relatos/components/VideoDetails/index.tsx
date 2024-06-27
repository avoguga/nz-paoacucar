import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as C from './styles';
import logo from '../../../../../main/assets/icons/ant/logo horizontal 150ppi.svg';
import videoIcon from '../../../../../main/assets/icons/small/video marrom.svg';
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
    console.log(depoimento);
  }, [id, fetchDepoimento]);

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
          <C.VideoPlayer controls src={depoimento.videoUrl}>
            Your browser does not support the video tag.
          </C.VideoPlayer>
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
