import React, { useState } from 'react';
import * as C from './styles';
import Play from '../../../../../../main/assets/icons/small/Play-video.svg';
import SetaDireita from '../../../../../../main/assets/icons/small/seta direita.svg';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';
import ErrorModal from '../../../../atoms/ErrorModal';

interface FirstStepProps {
  onBackClick?: () => void;
  onNextClick?: (data: {
    nome: string;
    email: string;
    telefone: string;
  }) => void;
}

const FirstStep: React.FC<FirstStepProps> = ({ onBackClick, onNextClick }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextClick = () => {
    const newErrors: string[] = [];

    if (!nome) {
      newErrors.push('Nome é obrigatório');
    }
    if (!email) {
      newErrors.push('E-mail é obrigatório');
    }
    if (!telefone) {
      newErrors.push('Telefone é obrigatório');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setIsModalOpen(true);
    } else {
      setErrors([]);
      const videoData = {
        nome,
        email,
        telefone,
      };
      onNextClick && onNextClick(videoData);
    }
  };

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
          <C.Input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <C.Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <C.Input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </C.InputContainer>
        <C.Button onClick={handleNextClick}>
          Próximo
          <img src={SetaDireita} alt="Próximo" />
        </C.Button>
      </C.Footer>
      <ErrorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        messages={errors}
      />
    </C.Container>
  );
};

export default FirstStep;
