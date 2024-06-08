import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d69b42; /* Cor de fundo semelhante à imagem */
  padding: 20px;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
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
  height: auto;
  display: block;
`;

export const TextIcon = styled.div`
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

export const RelatoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  max-width: 800px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
  padding: 20px;
`;
