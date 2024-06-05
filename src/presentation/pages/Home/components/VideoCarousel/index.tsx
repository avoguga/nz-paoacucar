import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import * as C from './styles'; // Importando os componentes estilizados
import setaDireita from '../../../../../main/assets/icons/small/Seta_direita.png';
import setaEsquerda from '../../../../../main/assets/icons/small/Seta_esquerda.png';
import textIcon from '../../../../../main/assets/icons/small/Texto.svg'; // Adicione esta linha

export interface CarouselItem {
  type: 'video' | 'text';
  content: string;
  imageUrl?: string;
}

interface VideoCarouselProps {
  items: CarouselItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = () => {
    window.location.href = '/relatos';
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    trackMouse: true,
  });

  return (
    <C.CarouselContainer>
      <C.ArrowButton onClick={handlePrevClick}>
        <C.ArrowIcon src={setaEsquerda} alt="Seta Esquerda" />
      </C.ArrowButton>
      <C.VideoWrapper ref={carouselRef} {...swipeHandlers}>
        {items.map((item, index) => (
          <C.VideoItem key={index} onClick={handleClick}>
            {item.type === 'video' ? (
              <C.Video
                src={item.content}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <C.TextItem>
                <C.TextImage src={item.imageUrl} alt="Texto Relato" />
                <C.TextIcon src={textIcon} alt="Ícone de Texto" />
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
