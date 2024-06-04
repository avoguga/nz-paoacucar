import React, { useState } from 'react';
import * as C from './styles'; // Importando os componentes estilizados
import setaDireita from '../../../../../main/assets/icons/small/Seta_direita.png';
import setaEsquerda from '../../../../../main/assets/icons/small/Seta_esquerda.png';

export interface CarouselItem {
  type: 'video' | 'text';
  content: string;
  imageUrl?: string;
}

interface VideoCarouselProps {
  items: CarouselItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleClick = () => {
    window.location.href = '/relatos';
  };

  return (
    <C.CarouselContainer>
      <C.ArrowButton onClick={handlePrevClick}>
        <C.ArrowIcon src={setaEsquerda} alt="Seta Esquerda" />
      </C.ArrowButton>
      <C.VideoWrapper>
        {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
          <C.VideoItem key={index} onClick={handleClick}>
            {item.type === 'video' ? (
              <C.Video
                src={item.content}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <C.TextItem>
                <C.TextImage src={item.imageUrl} alt="Texto Relato" />
              </C.TextItem>
            )}
          </C.VideoItem>
        ))}
      </C.VideoWrapper>
      <C.ArrowButton onClick={handleNextClick}>
        <C.ArrowIcon src={setaDireita} alt="Seta Direita" />
      </C.ArrowButton>
    </C.CarouselContainer>
  );
};

export default VideoCarousel;
