import { sg } from 'presentation/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};

  padding: 20px;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 2rem;
  max-width: 100rem;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 40, 13, 0.6);
`;

export const TestimonialCard = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover img {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 12.5rem;
  display: block;
  object-fit: cover;
`;

export const Video = styled.video`
  width: 100%;
  height: 12.5rem;
  display: block;
  object-fit: cover;
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

export const TextIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  img {
    width: 50px;
    height: 50px;
    fill: #fff;
  }
`;
