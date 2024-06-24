import VideoRecorder from 'presentation/components/molecules/VideoRecorder';

import * as C from './styles';

interface ThirdStepProps {
  onBackClick: () => void;
  onNextClick: () => void;
}

const ThirdStep = ({ onBackClick }: ThirdStepProps) => {
  return (
    <C.Container>
      <C.VideoSection>
        <VideoRecorder onBackClick={onBackClick} />

        {/* <C.NavButton onClick={onNextClick}>
            Próximo
            <img src={SetaDireita} alt="Próximo" />
          </C.NavButton> */}
      </C.VideoSection>
    </C.Container>
  );
};

export default ThirdStep;
