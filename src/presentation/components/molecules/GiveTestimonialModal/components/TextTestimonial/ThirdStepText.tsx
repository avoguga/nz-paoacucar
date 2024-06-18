import React, { useState } from 'react';
import * as C from './styles';
import SetaDireita from '../../../../../../main/assets/icons/small/Seta_direita.png';
import SetaEsquerda from '../../../../../../main/assets/icons/small/Seta_esquerda.png';
import TextIcon from '../../../../../../main/assets/icons/small/Texto-marrom.svg';

interface ThirdStepTextProps {
  onBackClick: () => void;
  onSubmit: (texto: string) => void;
}

const ThirdStepText: React.FC<ThirdStepTextProps> = ({
  onBackClick,
  onSubmit,
}) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = () => {
    onSubmit(texto);
  };

  return (
    <C.Container>
      <C.HeaderText>
        <C.TitleMsg>
          Escreva seu depoimento na caixa de texto abaixo:
        </C.TitleMsg>
      </C.HeaderText>
      <C.TextInputContainer>
        <C.TextIcon src={TextIcon} alt="Text Icon" />
        <C.TextArea
          placeholder="Escreva seu depoimento aqui..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          maxLength={500}
        ></C.TextArea>
        <C.CharCount>{texto.length} / 500 caracteres</C.CharCount>
      </C.TextInputContainer>
      <C.FooterText>
        <C.Button onClick={onBackClick}>
          <img src={SetaEsquerda} alt="Anterior" />
          Anterior
        </C.Button>
        <C.Button onClick={handleSubmit}>
          Próximo
          <img src={SetaDireita} alt="Próximo" />
        </C.Button>
      </C.FooterText>
    </C.Container>
  );
};

export default ThirdStepText;
