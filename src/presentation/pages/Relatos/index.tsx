import { useEffect, useState } from 'react';
import * as C from './styles';
import Header from './components/Header';
import AllTestimonials, { CarouselItem } from './components/AllTestimonials';
import axios from 'axios';
import image1 from '../../../main/assets/images/background/depoimento-1.webp';

const Relatos = () => {
  const [testimonials, setTestimonials] = useState<CarouselItem[]>([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:3001/depoimentos');
        const data = response.data.map((depoimento: any) => ({
          id: depoimento._id,
          type: depoimento.videoUrl ? 'video' : 'text',
          content: depoimento.videoUrl || depoimento.texto,
          imageUrl: depoimento.fotoUrl || image1, // Substitua por uma imagem padrão se necessário
        }));
        setTestimonials(data);
      } catch (error) {
        console.error('Erro ao buscar depoimentos:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <C.Container>
      <Header />
      <br />
      <br />
      <C.TestimonialContent>
        <AllTestimonials />
      </C.TestimonialContent>
    </C.Container>
  );
};

export default Relatos;
