import { useParams } from 'react-router-dom';
import * as C from './styles';

const TextDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Aqui você pode buscar os detalhes do texto pela API usando o ID
  // const [text, setText] = useState<CarouselItem | null>(null);
  // useEffect(() => {
  //   // Função para buscar os detalhes do texto pela API
  //   const fetchText = async () => {
  //     try {
  //       const response = await fetch(`https://api.exemplo.com/depoimentos/${id}`);
  //       const data = await response.json();
  //       setText(data);
  //     } catch (error) {
  //       console.error('Erro ao buscar texto:', error);
  //     }
  //   };
  //
  //   fetchText();
  // }, [id]);

  // Dados estáticos para exemplo
  const text = {
    id,
    type: 'text',
    content: 'Este é o conteúdo do texto.',
    imageUrl: 'path/to/image1.jpg',
  };

  return (
    <C.Container>
      <C.RelatoContent>
        <C.TextContent>
          <C.Image src={text.imageUrl} alt="Text Thumbnail" />
          <C.Text>{text.content}</C.Text>
        </C.TextContent>
      </C.RelatoContent>
    </C.Container>
  );
};

export default TextDetail;
