import { useState } from 'react';
import * as C from './styles';
import close from '../../../../main/assets/icons/small/Fechar.svg';
import logo from '../../../../main/assets/icons/ant/logo vertical 300ppi.svg';
import Play from '../../../../main/assets/icons/small/Play-video.svg';
import Texto from '../../../../main/assets/icons/small/Texto-marrom.svg';
import FirstStepText from './components/TextTestimonial/FirstStepText';
import SecondStepText from './components/TextTestimonial/SecondStepText';
import ThirdStepText from './components/TextTestimonial/ThirdStepText';
import FourthStepPhoto from './components/TextTestimonial/FourthStepText';
import FifthStepPhotoConfirm from './components/TextTestimonial/FifthStepText';
import FirstStep from './components/VideoTestimonial/FirstStep';
import SecondStep from './components/VideoTestimonial/SecondStep';
import ThirdStep from './components/VideoTestimonial/ThirdStep';
import ConfirmCancelModal from '../ConfirmCancelModal';
import SixStepText from './components/TextTestimonial/SixStepText';

const GiveTestimonialModal = ({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonialData, setTestimonialData] = useState<{
    nome: string;
    email: string;
    telefone: string;
    texto?: string;
    foto?: string;
    video?: Blob;
  }>({ nome: '', email: '', telefone: '' });
  const [testimonialType, setTestimonialType] = useState<
    'video' | 'text' | null
  >(null);

  const convertBase64ToBlob = (base64, mimeType) => {
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeType });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('nome', testimonialData.nome);
    formData.append('email', testimonialData.email);
    formData.append('telefone', testimonialData.telefone);
    if (testimonialData.texto) formData.append('texto', testimonialData.texto);
    if (testimonialData.foto) {
      const fotoBlob = convertBase64ToBlob(testimonialData.foto, 'image/jpeg');
      formData.append('foto', fotoBlob, 'foto.jpg');
    }
    if (testimonialData.video) {
      formData.append('video', testimonialData.video, 'video.mp4');
    }

    try {
      const response = await fetch('http://localhost:3001/depoimentos', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const data = await response.json();
      console.log('Depoimento criado com sucesso:', data);

      setCurrentStep(0);
      onClose && onClose();
    } catch (error) {
      console.error('Erro ao criar depoimento:', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(true);
  };

  const handleConfirmCancel = () => {
    setTestimonialData({ nome: '', email: '', telefone: '' });
    setCurrentStep(0);
    setIsModalOpen(false);
    onClose && onClose();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              <C.OptionsButton
                onClick={() => {
                  setTestimonialType('video');
                  setCurrentStep(1);
                }}
              >
                <img src={Play} alt="video" /> Video
              </C.OptionsButton>
              <C.OptionsButton
                onClick={() => {
                  setTestimonialType('text');
                  setCurrentStep(4);
                }}
              >
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
          onNextClick={(data: any) => {
            setTestimonialData((prev) => ({ ...prev, ...data }));
            setCurrentStep(2);
          }}
        />
      ),
    },
    {
      content: (
        <SecondStep
          nome={testimonialData.nome}
          onBackClick={() => setCurrentStep(1)}
          onNextClick={() => setCurrentStep(3)}
        />
      ),
    },
    {
      content: (
        <ThirdStep
          onConfirm={handleSubmit}
          onStop={(video: any) => {
            setTestimonialData((prev) => ({ ...prev, video }));
          }}
          onBackClick={() => setCurrentStep(2)}
          onNextClick={() => setCurrentStep(4)}
          onCancel={handleCancel}
        />
      ),
    },
    {
      content: (
        <FirstStepText
          onBackClick={() => setCurrentStep(0)}
          onNextClick={(data: any) => {
            setTestimonialData((prev) => ({ ...prev, ...data }));
            setCurrentStep(5);
          }}
        />
      ),
    },
    {
      content: (
        <SecondStepText
          nome={testimonialData.nome}
          onBackClick={() => setCurrentStep(4)}
          onNextClick={() => setCurrentStep(6)}
        />
      ),
    },
    {
      content: (
        <ThirdStepText
          onBackClick={() => setCurrentStep(5)}
          onSubmit={(texto) => {
            setTestimonialData((prev) => ({ ...prev, texto }));
            setCurrentStep(7);
          }}
        />
      ),
    },
    {
      content: (
        <FourthStepPhoto
          onBackClick={() => setCurrentStep(6)}
          onNextClick={(foto) => {
            setTestimonialData((prev) => ({ ...prev, foto }));
            setCurrentStep(8);
          }}
        />
      ),
    },
    {
      content: (
        <FifthStepPhotoConfirm
          photo={testimonialData.foto || ''}
          onRetake={() => setCurrentStep(7)}
          onConfirm={() => setCurrentStep(9)} // Avançar para a sexta etapa
          onCancel={handleCancel}
        />
      ),
    },
    {
      content: <SixStepText onClose={onClose} />, // Passando onClose para SixStepText
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
        <ConfirmCancelModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirmCancel}
        />
      </C.ModalContent>
    </C.ModalOverlay>
  );
};

export default GiveTestimonialModal;
