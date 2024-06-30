import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as C from './styles';
import logo from '../../../../../main/assets/icons/ant/logo vertical 150ppi.svg';
import textIcon from '../../../../../main/assets/icons/small/Texto-marrom.svg';
import chatIcon from '../../../../../main/assets/icons/small/conversa.svg';
import ReportCard from 'presentation/components/atoms/ReportCard';
import image1 from '../../../../../main/assets/images/background/depoimento-1.webp';

interface Comment {
  nome: string;
  data: string;
  comentario: string;
}

interface Depoimento {
  id: string;
  type: 'text' | 'video';
  content: string;
  imageUrl?: string;
  nome: string;
  comments: Comment[];
}

const TextDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [depoimento, setDepoimento] = useState<Depoimento | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchDepoimento = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://gestormuseu.serradabarriga.app.br/depoimentos/${id}`
      );
      const data = response.data;
      setDepoimento({
        id: data._id,
        type: data.videoUrl ? 'video' : 'text',
        content: data.texto || data.videoUrl,
        imageUrl: data.fotoUrl,
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
      <C.TextProfile>
        <C.Logo src={logo} alt="" />
        <C.TextImageGroup>
          <C.TextIcon src={textIcon} alt="" />
          <C.Image src={depoimento.imageUrl} alt="Text Thumbnail" />
          <C.ProfileText>{depoimento.nome}</C.ProfileText>
        </C.TextImageGroup>
      </C.TextProfile>
      <C.RelatoContent>
        <C.TextContent>
          <C.Text>{depoimento.content}</C.Text>
        </C.TextContent>
      </C.RelatoContent>
      <ReportCard
        closeButton={true}
        icon={chatIcon}
        content={depoimento.nome}
        initialComments={depoimento.comments}
        depoimentoId={depoimento.id}
        fetchDepoimento={fetchDepoimento}
      />
    </C.Container>
  );
};

export default TextDetail;
