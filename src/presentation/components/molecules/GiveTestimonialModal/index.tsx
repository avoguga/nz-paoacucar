import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as C from './styles';
import close from '../../../../main/assets/icons/small/Fechar.svg';
import logo from '../../../../main/assets/icons/ant/CCPA_logo_vertical.png';
import Play from '../../../../main/assets/icons/small/Play-video.png';
import Texto from '../../../../main/assets/icons/small/Texto.png';
import FirstStep from './components/VideoTestimonial/FirstStep';
import SecondStep from './components/VideoTestimonial/SecondStep';
import ThirdStep from './components/VideoTestimonial/ThirdStep';

const GiveTestimonialModal = ({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      content: (
        <>
          <C.TextContent>
            <C.Logo
              src={logo}
              alt="Logo da casa de cultura pão de açúcar alagoas"
            />
            <C.Text>
              Ajude a preservar a memória de Pão de Açúcar, deixe um depoimento
              contando sua história com a cidade, você pode fazer um texto ou
              gravar um vídeo, é simples e rápido.
            </C.Text>
          </C.TextContent>
          <C.OptionsContainer>
            <C.OptionsTitle>Escolha uma das opções</C.OptionsTitle>
            <C.OptionsButtons>
              <C.OptionsButton onClick={() => setCurrentStep(1)}>
                <img src={Play} alt="video" /> Video
              </C.OptionsButton>
              <C.OptionsButton onClick={() => setCurrentStep(1)}>
                <img src={Texto} alt="Texto" /> Texto
              </C.OptionsButton>
            </C.OptionsButtons>
          </C.OptionsContainer>
        </>
      ),
    },
    {
      content: (
        <FirstStep
          onBackClick={() => setCurrentStep(0)}
          onNextClick={() => setCurrentStep(2)}
        />
      ),
    },
    {
      content: (
        <SecondStep
          onBackClick={() => setCurrentStep(1)}
          onNextClick={() => setCurrentStep(3)}
        />
      ),
    },
    {
      content: (
        <ThirdStep
          onBackClick={() => setCurrentStep(2)}
          onNextClick={() => setCurrentStep(4)}
        />
      ),
    },
  ];

  if (!isOpen) return null;

  return (
    <C.ModalOverlay>
      <C.ModalContent>
        <C.CloseButton onClick={onClose}>
          <img src={close} alt="Close" />
        </C.CloseButton>
        {steps[currentStep].content}
      </C.ModalContent>
    </C.ModalOverlay>
  );
};

export default GiveTestimonialModal;
