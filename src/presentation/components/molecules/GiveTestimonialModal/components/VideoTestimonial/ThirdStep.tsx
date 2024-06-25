import VideoRecorder from 'presentation/components/molecules/VideoRecorder';

import * as C from './styles';

interface ThirdStepProps {
  onBackClick: () => void;
  onNextClick?: () => void;
  onConfirm: () => void;
  onStop: (video: any) => void;
}

const ThirdStep = ({ onBackClick, onConfirm, onStop }: ThirdStepProps) => {
  return (
    <C.Container>
      <C.VideoSection>
        <VideoRecorder
          onBackClick={onBackClick}
          onConfirm={onConfirm}
          onStop={(video: any) => {
            onStop(video);
          }}
        />

        {/* <C.NavButton onClick={onNextClick}>
            Próximo
            <img src={SetaDireita} alt="Próximo" />
          </C.NavButton> */}
      </C.VideoSection>
    </C.Container>
  );
};

export default ThirdStep;
