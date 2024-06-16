import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as C from './styles';
import logo from '../../../../../main/assets/icons/small/Logo_Vertical.png';
import textIcon from '../../../../../main/assets/icons/small/Texto-marrom.svg';
import chatIcon from '../../../../../main/assets/icons/small/chat.svg';
import ReportCard from 'presentation/components/atoms/ReportCard';
import image1 from '../../../../../main/assets/images/background/depoimento-1.webp';

interface Depoimento {
  id: string;
  type: 'text' | 'video';
  content: string;
  imageUrl?: string;
  nome: string;
}

const TextDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [depoimento, setDepoimento] = useState<Depoimento | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepoimento = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/depoimentos/${id}`
        );
        const data = response.data;
        setDepoimento({
          id: data._id,
          type: data.videoUrl ? 'video' : 'text',
          content: data.texto || data.videoUrl,
          imageUrl: data.fotoUrl || image1,
          nome: data.nome,
        });
        // eslint-disable-next-line @typescript-eslint/no-shadow
      } catch (error: any) {
        console.error('Erro ao buscar depoimento:', error);
        setError('Erro ao buscar depoimento.');
      }
    };

    fetchDepoimento();
  }, [id]);

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
      <ReportCard icon={chatIcon} content={depoimento.content} />
    </C.Container>
  );
};

export default TextDetail;
