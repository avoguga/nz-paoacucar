import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #4c4039;
  height: 200px;
  z-index: 2;

  &:first-child {
    left: 1rem;
    background: linear-gradient(
      to right,
      rgba(211, 141, 78, 1),
      rgba(211, 141, 78, 0)
    );
  }

  &:last-child {
    right: 1rem;
    z-index: 2;
    background: linear-gradient(
      to left,
      rgba(211, 141, 78, 1),
      rgba(211, 141, 78, 0)
    );
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
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
`;

export const TextImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
