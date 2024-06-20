import Play from '../../../../../../main/assets/icons/small/Play-video.svg';
import SetaDireita from '../../../../../../main/assets/icons/small/seta direita.svg';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';
import * as C from './styles';

interface FirstStepProps {
  onBackClick: () => void;
  onNextClick: () => void;
}

const FirstStep = ({ onBackClick, onNextClick }: FirstStepProps) => {
  return (
    <C.Container>
      <C.Header>
        <img src={Play} alt="video" />
        <C.TitleMsg>
          Você optou por gravar um vídeo, siga as instruções, são apenas algumas
          etapas. O video pode ter até 1 minuto de duração.
        </C.TitleMsg>
      </C.Header>

      <C.Footer>
        <C.Button onClick={onBackClick}>
          <img src={SetaEsquerda} alt="Anterior" />
          Anterior
        </C.Button>
        <C.InputContainer>
          <C.InputContainerTitle>
            Informações básicas (obrigatório)
          </C.InputContainerTitle>
          <C.Input placeholder="Nome" />
          <C.Input placeholder="E-mail" />
          <C.Input placeholder="Telefone" />
        </C.InputContainer>
        <C.Button onClick={onNextClick}>
          Próximo
          <img src={SetaDireita} alt="Próximo" />
        </C.Button>
      </C.Footer>
    </C.Container>
  );
};

export default FirstStep;
