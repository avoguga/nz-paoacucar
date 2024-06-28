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
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1200px;
  gap: 34px;
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
  width: 21.875rem;
  height: 12.5rem;
  display: block;
  object-fit: cover;
`;

export const Video = styled.video`
  width: 21.875rem;
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
