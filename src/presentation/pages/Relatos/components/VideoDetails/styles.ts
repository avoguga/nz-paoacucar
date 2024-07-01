import styled from 'styled-components';
import { sg } from 'presentation/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  height: 100%;
  width: 100%;
  gap: 25px;
  padding: 50px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  padding-left: 50px;
  padding-right: 50px;
`;

export const TextProfile = styled.aside`
  display: flex;
  flex-direction: column;
  height: 50rem;
  justify-content: space-between;
  align-items: center;
`;

export const TextImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  width: 420px;
  height: 90px;
`;

export const RelatoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 45.625rem;
  background-color: rgba(139, 69, 19, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoPlayer = styled.video<{ isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div<{ isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  visibility: ${(props) => (!props.isPlaying ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(93, 40, 13, 0.6);
`;

export const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VolumeContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
`;

export const VolumeIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SliderProps {
  value: number;
}

export const VolumeSlider = styled.input.attrs<SliderProps>({
  type: 'range',
})<SliderProps>`
  margin-left: 5px;
  -webkit-appearance: none;
  appearance: none;
  width: 100px;
  height: 20px;
  background: ${(props) =>
    `linear-gradient(to right, #FFD600 ${props.value * 100}%, #5D280D ${
      props.value * 100
    }%)`};
  cursor: pointer;
  outline: none;

  &::-webkit-slider-thumb {
    width: 0;
    height: 0;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
  }

  &::-moz-range-thumb {
    width: 0;
    height: 0;
    background: transparent;
    border: none;
  }

  &::-ms-thumb {
    width: 0;
    height: 0;
    background: transparent;
    border: none;
  }
`;

export const Slider = styled.input.attrs<SliderProps>({
  type: 'range',
})<SliderProps>`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 20px;
  bottom: 0px;
  opacity: 0;
  z-index: 1;
`;

export const ProgressBarWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: 0px;
  z-index: 0;
`;

export const ProfileText = styled.h2`
  font-size: 34px;
  color: ${sg.colors.textColors.colorTextDefault};
  text-align: left;
  font-family: 'myFont', sans-serif;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  img {
    width: 30px;
    height: 30px;
  }
  margin-bottom: 5px;
  display: flex;
  top: 5%;
  right: 9%;
  justify-content: right;
`;
