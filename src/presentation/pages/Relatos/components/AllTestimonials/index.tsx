import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import textIcon from '../../../../../main/assets/icons/small/Texto.svg';
import videoIcon from '../../../../../main/assets/icons/small/video branco.svg';

export interface CarouselItem {
  id: number;
  type: 'video' | 'text';
  content: string;
  imageUrl?: string;
  videoUrl?: string;
}

const AllTestimonials: React.FC = () => {
  const [items, setItems] = useState<CarouselItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://gestormuseu.serradabarriga.app.br/depoimentos')
      .then((response) => {
        const testimonials = response.data.map((item: any) => ({
          id: item._id,
          type: item.videoUrl ? 'video' : 'text',
          content: item.texto,
          imageUrl: item.fotoUrl,
          videoUrl: item.videoUrl,
        }));
        setItems(testimonials.reverse());
      })
      .catch((error) => console.error('Erro ao buscar depoimentos:', error));
  }, []);

  const handleCardClick = (item: CarouselItem) => {
    if (item.type === 'video') {
      navigate(`/relato/video/${item.id}`, {
        state: { videoUrl: item.videoUrl },
      });
    } else {
      navigate(`/relato/text/${item.id}`, {
        state: { imageUrl: item.imageUrl },
      });
    }
  };

  return (
    <C.TestimonialsGrid>
      {items.map((item, index) => (
        <C.TestimonialCard key={index} onClick={() => handleCardClick(item)}>
          {item.type === 'video' ? (
            <>
              <C.Video src={item.videoUrl} controls={false} />
              <C.TextIcon>
                <img src={videoIcon} alt="Video Thumbnail" />
              </C.TextIcon>
            </>
          ) : (
            <>
              <C.Image src={item.imageUrl} alt="Text Thumbnail" />
              <C.TextIcon>
                <img src={textIcon} alt="Text Thumbnail" />
              </C.TextIcon>
            </>
          )}
        </C.TestimonialCard>
      ))}
    </C.TestimonialsGrid>
  );
};

export default AllTestimonials;
