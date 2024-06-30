import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  overflow-x: hidden;
  width: 100%; /* Ajustado para ocupar a largura total */
  max-width: 120rem;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4c4039;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem; /* Ajusta a largura do botão */

  &:first-child {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(228, 171, 87, 1),
      rgba(228, 171, 87, 0)
    );
  }

  &:last-child {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(228, 171, 87, 1),
      rgba(228, 171, 87, 0)
    );
  }
`;

export const ArrowIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const VideoWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  gap: 30px;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  padding: 0 1rem;
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const VideoItem = styled.div`
  position: relative;
  &:hover img,
  &:hover video {
    opacity: 0.8;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 40, 13, 0.6);
`;

export const Video = styled.video`
  width: 400px;
  height: 100%;
  object-fit: cover;
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
  width: 400px;
  height: 100%;
  object-fit: cover;
`;

export const TextIcon = styled.img`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffff;
`;

export const VideoIcon = styled.img`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffff;
`;
