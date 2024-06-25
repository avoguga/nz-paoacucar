import * as C from './styles';
import logo from '../../../../../main/assets/icons/ant/logo vertical 300ppi.svg';
import Button from 'presentation/components/atoms/Button';
import { sg } from 'presentation/styles';
import VideoCarousel, { CarouselItem } from '../VideoCarousel';
import { useState, useEffect } from 'react';
import GiveTestimonialModal from 'presentation/components/molecules/GiveTestimonialModal';
import axios from 'axios';

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [fetchTrigger, setFetchTrigger] = useState(false); // Estado para controlar mudanças

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:3001/depoimentos');
      const data = response.data.map((depoimento: any) => ({
        id: depoimento._id,
        type: depoimento.videoUrl ? 'video' : 'text',
        content: depoimento.texto,
        imageUrl: depoimento.fotoUrl,
        videoUrl: depoimento.videoUrl,
      }));
      setItems(data);
    } catch (error) {
      console.error('Erro ao buscar depoimentos:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTrigger]); // Dependência no fetchTrigger para refazer o fetch

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFetchTrigger(!fetchTrigger); // Alterna o valor do fetchTrigger para refazer o fetch
  };

  return (
    <C.Container>
      <C.WelcomeField>
        <C.Logo
          src={logo}
          alt="Logo da casa de cultura pão de açúcar alagoas"
        />

        <C.TextContainer>
          <h1> Seja bem-vindo!</h1>
          <p>
            Faça parte da preservação da memória de Pão de Açúcar. Conte sua
            história com a cidade, seja através de um texto ou gravando um
            vídeo. É simples e rápido deixar sua marca.
          </p>{' '}
          <br />
          <br />
          <Button
            backgroundColor={
              sg.colors.backgroundColors.colorBackgroundButtonOne
            }
            textColor={sg.colors.textColors.colorTextNeutral}
            onClick={handleOpenModal}
            style={{
              fontWeight: '500',
            }}
            title="Deixar Depoimento"
          >
            Deixar Depoimento
          </Button>
        </C.TextContainer>
      </C.WelcomeField>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        backgroundColor={sg.colors.backgroundColors.colorBackgroundButtonTwo}
        onClick={() => {
          console.log('oi');
        }}
        title="Galeria de depoimentos"
        style={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
        }}
        width="20rem"
        height="3rem"
      >
        Galeria de depoimentos
      </Button>{' '}
      <br /> <br />
      <VideoCarousel items={items} />
      {isModalOpen && (
        <GiveTestimonialModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </C.Container>
  );
};

export default Welcome;
