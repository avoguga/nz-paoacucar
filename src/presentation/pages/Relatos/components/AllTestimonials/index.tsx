import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import textIcon from '../../../../../main/assets/icons/small/Texto.svg';
import videoIcon from '../../../../../main/assets/icons/small/Play-video.svg';

export interface CarouselItem {
  id: number;
  type: 'video' | 'text';
  content: string;
  imageUrl?: string;
}

interface AllTestimonialsProps {
  items: CarouselItem[];
}

const AllTestimonials: React.FC<AllTestimonialsProps> = ({ items }) => {
  const navigate = useNavigate();

  const handleCardClick = (item: CarouselItem) => {
    if (item.type === 'video') {
      navigate(`/relato/video/${item.id}`, {
        state: { imageUrl: item.imageUrl },
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
              <C.Image src={item.imageUrl} alt="Video Thumbnail" />
              <C.TextIcon>
                <img src={videoIcon} alt="" />
              </C.TextIcon>
            </>
          ) : (
            <>
              <C.Image src={item.imageUrl} alt="Text Thumbnail" />
              <C.TextIcon>
                <img src={textIcon} alt="" />
              </C.TextIcon>
            </>
          )}
        </C.TestimonialCard>
      ))}
    </C.TestimonialsGrid>
  );
};

export default AllTestimonials;
