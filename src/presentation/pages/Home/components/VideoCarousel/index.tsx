import React, { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import * as C from './styles';
import setaDireita from '../../../../../main/assets/icons/small/seta direita.svg';
import setaEsquerda from '../../../../../main/assets/icons/small/seta esquerda.svg';
import textIcon from '../../../../../main/assets/icons/small/Texto.svg';
import videoIcon from '../../../../../main/assets/icons/small/video branco.svg';

export interface CarouselItem {
  type: 'video' | 'text';
  content: string;
  imageUrl?: string;
  videoUrl?: string;
}

interface VideoCarouselProps {
  items: CarouselItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth / 3, // Ajuste o valor conforme necessário
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth / 3, // Ajuste o valor conforme necessário
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
              <C.TextItem>
                <C.Video src={item.videoUrl} controls={false} />
                <C.VideoIcon src={videoIcon} alt="Ícone de Vídeo" />
              </C.TextItem>
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
