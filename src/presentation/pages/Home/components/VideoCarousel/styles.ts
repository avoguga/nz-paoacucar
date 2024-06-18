import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  overflow-x: scroll;
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
    left: 60px;

    background: linear-gradient(
      to right,
      rgba(228, 171, 87, 1),
      rgba(211, 141, 78, 0)
    );
  }

  &:last-child {
    right: 60px;
    background: linear-gradient(
      to left,
      rgba(228, 171, 87, 1),
      rgba(211, 141, 78, 0)
    );
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 90%;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const VideoItem = styled.div`
  min-width: 25%;
  margin: 0 1.5rem;
  position: relative;
`;

export const Video = styled.img`
  width: 100%;
  height: 200px;
`;

export const ArrowIcon = styled.img`
  margin: 0px;
  width: 28px;
  height: 45px;

  color: #5d280d;
`;

export const TextItem = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
`;

export const TextImage = styled.img`
  max-width: 350px;
  max-height: 200px;
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
