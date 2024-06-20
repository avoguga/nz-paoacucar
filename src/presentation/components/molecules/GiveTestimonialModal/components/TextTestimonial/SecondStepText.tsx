import Text from '../../../../../../main/assets/icons/small/Texto-marrom.svg';
import SetaDireita from '../../../../../../main/assets/icons/small/Seta_direita.png';
import SetaEsquerda from '../../../../../../main/assets/icons/small/Seta_esquerda.png';
import * as C from './styles';

interface SecondStepProps {
  onBackClick: () => void;
  onNextClick: () => void;
}

const SecondStep = ({ onBackClick, onNextClick }: SecondStepProps) => {
  return (
    <C.Container>
      <C.Header>
        <img src={Text} alt="video" />
        <C.TitleMsg>
          Olá Nome, Estamos prestes a começar. Antes disso, precisamos da sua
          autorização para que o museu utilize sua imagem.
        </C.TitleMsg>
      </C.Header>

      <C.Footer>
        <C.Button onClick={onBackClick}>
          <img src={SetaEsquerda} alt="Anterior" />
          Anterior
        </C.Button>
        <C.InputContainer>
          <C.InputContainerTitle>
            Clique aqui para permitir o uso.
          </C.InputContainerTitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#F9B515',
              padding: '0 10px',
            }}
          >
            <C.InputLabel
              value="Eu autorizo o uso da minha imagem"
              type="radio"
            />
            <label htmlFor="html">Eu autorizo o uso da minha imagem</label>
          </div>
        </C.InputContainer>
        <C.Button onClick={onNextClick}>
          Próximo
          <img src={SetaDireita} alt="Próximo" />
        </C.Button>
      </C.Footer>
    </C.Container>
  );
};

export default SecondStep;
