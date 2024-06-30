import { useState } from 'react';
import Play from '../../../../../../main/assets/icons/small/Play-video.svg';
import SetaDireita from '../../../../../../main/assets/icons/small/seta direita.svg';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';
import * as C from './styles';
import ErrorModal from '../../../../atoms/ErrorModal'; // Certifique-se de importar o ErrorModal corretamente
// Certifique-se de importar o ErrorModal corretamente

interface SecondStepProps {
  onBackClick: () => void;
  onNextClick: () => void;
  nome: string;
}

const SecondStep = ({ onBackClick, onNextClick, nome }: SecondStepProps) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleNextClick = () => {
    if (isAuthorized) {
      setIsErrorModalOpen(false);
      onNextClick();
    } else {
      setIsErrorModalOpen(true);
    }
  };

  return (
    <C.Container>
      <C.Header>
        <img src={Play} alt="video" />
        <C.TitleMsg>
          Olá {nome}, estamos prestes a começar. Antes disso, precisamos da sua
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
            <C.RadioContainer
              onClick={() => {
                setIsAuthorized(true);
                setIsErrorModalOpen(false);
              }}
            >
              <C.InputLabel
                id="radio-button"
                name="autorizacao"
                value="Eu autorizo o uso da minha imagem"
                type="radio"
                checked={isAuthorized}
                readOnly
              />
              <label htmlFor="radio-button">
                Eu autorizo o uso da minha imagem
              </label>
            </C.RadioContainer>
          </div>
        </C.InputContainer>
        <C.Button onClick={handleNextClick}>
          Próximo
          <img src={SetaDireita} alt="Próximo" />
        </C.Button>
      </C.Footer>
      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        messages={['Por favor, clique na autorização antes de prosseguir.']}
      />
    </C.Container>
  );
};

export default SecondStep;
