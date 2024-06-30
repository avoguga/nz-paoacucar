import React, { useState } from 'react';
import * as C from './styles';
import close from '../../../../main/assets/icons/small/Fechar.svg';
import logo from '../../../../main/assets/icons/ant/logo vertical 300ppi.svg';
import Play from '../../../../main/assets/icons/small/video marrom.svg';
import Texto from '../../../../main/assets/icons/small/Texto-marrom.svg';
import FirstStepText from './components/TextTestimonial/FirstStepText';
import SecondStepText from './components/TextTestimonial/SecondStepText';
import ThirdStepText from './components/TextTestimonial/ThirdStepText';
import FourthStepPhoto from './components/TextTestimonial/FourthStepText';
import FifthStepPhotoConfirm from './components/TextTestimonial/FifthStepText';
import FirstStep from './components/VideoTestimonial/FirstStep';
import SecondStep from './components/VideoTestimonial/SecondStep';
import ThirdStep from './components/VideoTestimonial/ThirdStep';
import PostRecordOptions from '../VideoRecorder/components/PostRecorderOptions';
import ConfirmCancelModal from '../ConfirmCancelModal';
import SixStepVideo from './components/VideoTestimonial/SixStepVideo';
import SixStepText from './components/TextTestimonial/SixStepText';
import Loading from '../../atoms/Loading'; // Certifique-se de que o caminho está correto

const GiveTestimonialModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento
  const [testimonialData, setTestimonialData] = useState({
    nome: '',
    email: '',
    telefone: '',
    texto: '',
    foto: '',
    video: null,
  });
  const [testimonialType, setTestimonialType] = useState('video');

  const convertBase64ToBlob = (base64, mimeType) => {
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeType });
  };

  const handleSubmitText = async () => {
    const formData = new FormData();
    formData.append('nome', testimonialData.nome);
    formData.append('email', testimonialData.email);
    formData.append('telefone', testimonialData.telefone);
    if (testimonialData.texto) formData.append('texto', testimonialData.texto);
    if (testimonialData.foto) {
      const fotoBlob = convertBase64ToBlob(testimonialData.foto, 'image/jpeg');
      formData.append('foto', fotoBlob, 'foto.jpg');
    }

    try {
      const response = await fetch(
        'https://gestormuseu.serradabarriga.app.br/depoimentos',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const data = await response.json();
      console.log('Depoimento criado com sucesso:', data);

      setCurrentStep(9); // Avança para a sexta etapa após salvar
    } catch (error) {
      console.error('Erro ao criar depoimento:', error);
    } finally {
      setIsLoading(false); // Termina o carregamento
    }
  };

  const handleSubmitVideo = async () => {
    const formData = new FormData();
    formData.append('nome', testimonialData.nome);
    formData.append('email', testimonialData.email);
    formData.append('telefone', testimonialData.telefone);
    if (testimonialData.video) {
      formData.append('video', testimonialData.video, 'video.mp4');
    }

    try {
      const response = await fetch(
        'https://gestormuseu.serradabarriga.app.br/depoimentos',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const data = await response.json();
      console.log('Depoimento criado com sucesso:', data);

      setCurrentStep(9); // Avança para a sexta etapa após salvar
    } catch (error) {
      console.error('Erro ao criar depoimento:', error);
    } finally {
      setIsLoading(false); // Termina o carregamento
    }
  };

  const handleConfirmText = async () => {
    setIsLoading(true); // Inicia o carregamento
    await handleSubmitText();
  };

  const handleConfirmVideo = async () => {
    setIsLoading(true); // Inicia o carregamento
    await handleSubmitVideo();
  };

  const handleCancel = () => {
    setIsModalOpen(true);
  };

  const handleConfirmCancel = () => {
    // @ts-ignore
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
          onNextClick={(data) => {
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
          onBackClick={() => setCurrentStep(2)}
          onNextClick={() => {
            handleConfirmVideo();
            setCurrentStep(8);
          }} // Avança para o passo de opções de gravação
          onStop={(video) => {
            setTestimonialData((prev) => ({ ...prev, video }));
          }}
          onCancel={handleCancel}
        />
      ),
    },
    {
      content: (
        <FirstStepText
          onBackClick={() => setCurrentStep(0)}
          onNextClick={(data) => {
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
      content:
        testimonialType === 'video' ? (
          <SixStepVideo onClose={onClose} />
        ) : (
          <FifthStepPhotoConfirm
            photo={testimonialData.foto || ''}
            onRetake={() => setCurrentStep(7)}
            onConfirm={handleConfirmText}
            onCancel={handleCancel}
          />
        ),
    },
    {
      content:
        testimonialType === 'video' ? (
          <SixStepVideo onClose={onClose} />
        ) : (
          <SixStepText onClose={onClose} />
        ),
    },
  ];

  if (!isOpen) return null;

  return (
    <C.ModalOverlay>
      <C.ModalContent>
        {isLoading && <Loading />} {/* Exibe o indicador de carregamento */}
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
