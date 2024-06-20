import React, { useState } from 'react';
import * as C from './styles';
import Text from '../../../../../../main/assets/icons/small/Texto-marrom.svg';
import SetaDireita from '../../../../../../main/assets/icons/small/seta direita.svg';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';

interface FirstStepTextProps {
  onBackClick: () => void;
  onNextClick: (data: {
    nome: string;
    email: string;
    telefone: string;
  }) => void;
}

const FirstStepText: React.FC<FirstStepTextProps> = ({
  onBackClick,
  onNextClick,
}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleNextClick = () => {
    const depoimentoData = {
      nome,
      email,
      telefone,
    };
    onNextClick(depoimentoData);
  };

  return (
    <C.Container>
      <C.Header>
        <img src={Text} alt="video" />
        <C.TitleMsg>
          Você optou por escrever um depoimento, siga as instruções, são apenas
          algumas etapas. O texto pode ter até 500 caracteres.
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
    </C.Container>
  );
};

export default FirstStepText;
