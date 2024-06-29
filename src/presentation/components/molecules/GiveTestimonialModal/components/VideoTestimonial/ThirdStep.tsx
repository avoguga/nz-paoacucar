import VideoRecorder from 'presentation/components/molecules/VideoRecorder';
import * as C from './styles';

interface ThirdStepProps {
  onBackClick: () => void;
  onNextClick: () => void;
  onStop: (video: any) => void;
  onCancel: () => void;
}

const ThirdStep = ({
  onBackClick,
  onNextClick,
  onStop,
  onCancel,
}: ThirdStepProps) => {
  return (
    <C.Container>
      <C.VideoSection>
        <VideoRecorder
          onBackClick={onBackClick}
          onConfirm={onNextClick}
          onStop={(video: any) => {
            onStop(video);
          }}
          onCancel={onCancel}
        />
      </C.VideoSection>
    </C.Container>
  );
};

export default ThirdStep;
