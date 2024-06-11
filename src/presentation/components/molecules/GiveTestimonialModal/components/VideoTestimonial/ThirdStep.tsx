import VideoRecorder from 'presentation/components/molecules/VideoRecorder';
import SetaDireita from '../../../../../../main/assets/icons/small/Seta_direita.png';
import SetaEsquerda from '../../../../../../main/assets/icons/small/Seta_esquerda.png';
import * as C from './styles';

interface ThirdStepProps {
  onBackClick: () => void;
  onNextClick: () => void;
}

const ThirdStep = ({ onBackClick, onNextClick }: ThirdStepProps) => {
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
