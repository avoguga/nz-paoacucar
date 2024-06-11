import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  background-color: #e4ab57;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #4c4039;
  height: 250px;
  z-index: 2;
  position: absolute;

  &:first-child {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(228, 171, 87, 1),
      rgba(211, 141, 78, 0)
    );
  }

  &:last-child {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(228, 171, 87, 1),
      rgba(211, 141, 78, 0)
    );
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const VideoItem = styled.div`
  min-width: 25%;
  margin: 0 1rem;
  position: relative;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 200px;
`;

export const ArrowIcon = styled.img`
  margin: 15px;
  width: 2rem;
  height: 2rem;
  color: #5d280d;
`;

export const TextItem = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  position: relative;
`;

export const TextImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const TextIcon = styled.img`
  position: absolute;
  width: 45px;
  height: 45px;
  /* Centraliza o ícone sobre a imagem */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffff;
`;
