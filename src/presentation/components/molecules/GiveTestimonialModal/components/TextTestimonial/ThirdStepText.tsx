import React, { useState, useRef } from 'react';
import * as C from './styles';
import SetaDireita from '../../../../../../main/assets/icons/small/seta direita.svg';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';
import TextIcon from '../../../../../../main/assets/icons/small/Texto-marrom.svg';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './keyboardStyles.css'; // Arquivo CSS para tema escuro
import { keyboardLayouts } from 'presentation/components/molecules/ComentModal';

interface ThirdStepTextProps {
  onBackClick: () => void;
  onSubmit: (texto: string) => void;
}

const ThirdStepText: React.FC<ThirdStepTextProps> = ({
  onBackClick,
  onSubmit,
}) => {
  const [texto, setTexto] = useState('');
  const [layout, setLayout] = useState('default');
  const keyboard = useRef(null);

  const handleSubmit = () => {
    onSubmit(texto);
  };

  const onChange = (input) => {
    setTexto(input);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    if (button === '{shift}' || button === '{lock}') handleShift();
    if (button === '{accents}' || button === '{default}') {
      button === '{accents}' ? handleAccents() : handleDefault();
      return false; // Prevent button text from being inserted
    }
  };

  const handleAccents = () => {
    setLayout('accents');
  };

  const handleDefault = () => {
    setLayout('default');
  };

  const onFocusTextArea = (value) => {
    keyboard.current.setInput(value);
  };

  const onChangeTextArea = (event) => {
    const value = event.target.value;
    setTexto(value);
    keyboard.current.setInput(value);
  };

  return (
    <C.Container
      style={{
        marginBottom: '15.25rem',
      }}
    >
      <C.HeaderText>
        <C.TitleMsgThird>
          Escreva seu depoimento na caixa de texto abaixo:
        </C.TitleMsgThird>
      </C.HeaderText>
      <C.TextInputContainer>
        <C.TextIcon src={TextIcon} alt="Text Icon" />
        <C.TextArea
          placeholder="Escreva seu depoimento aqui..."
          value={texto}
          onChange={onChangeTextArea}
          onFocus={() => onFocusTextArea(texto)}
          // @ts-ignore
          maxLength={500}
        ></C.TextArea>
        <C.CharCount>
          <span>{texto.length} / 500</span>
          <span>caracteres</span>
        </C.CharCount>
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
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={keyboardLayouts}
        theme={'hg-theme-default myTheme1'}
      />
    </C.Container>
  );
};

export default ThirdStepText;
