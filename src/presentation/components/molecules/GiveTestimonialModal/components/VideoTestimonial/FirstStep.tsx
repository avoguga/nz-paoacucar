import React, { useState, useRef } from 'react';
import * as C from './styles';
import Play from '../../../../../../main/assets/icons/small/Play-video.svg';
import SetaDireita from '../../../../../../main/assets/icons/small/seta direita.svg';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';
import ErrorModal from '../../../../atoms/ErrorModal';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import '../TextTestimonial/keyboardStyles.css'; // Arquivo CSS para tema escuro

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
  const [layout, setLayout] = useState('default');
  const [inputName, setInputName] = useState('');
  const keyboard = useRef(null);

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

  const onChange = (input) => {
    if (inputName === 'nome') setNome(input);
    if (inputName === 'email') setEmail(input);
    if (inputName === 'telefone') setTelefone(input);
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

  const onFocusInput = (name, value) => {
    setInputName(name);
    keyboard.current.setInput(value);
  };

  const onChangeInput = (event, setState) => {
    const value = event.target.value;
    setState(value);
    keyboard.current.setInput(value);
  };

  return (
    <C.Container
      style={{
        marginBottom: '20.25rem',
      }}
    >
      <C.Header>
        <img src={Play} alt="video" />
        <C.TitleMsg>
          Você optou por gravar um vídeo, siga as instruções, são apenas algumas
          etapas. O vídeo pode ter até 1 minuto de duração.
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
            onChange={(e) => onChangeInput(e, setNome)}
            onFocus={() => onFocusInput('nome', nome)}
          />
          <C.Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => onChangeInput(e, setEmail)}
            onFocus={() => onFocusInput('email', email)}
          />
          <C.Input
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => onChangeInput(e, setTelefone)}
            onFocus={() => onFocusInput('telefone', telefone)}
          />
        </C.InputContainer>
        <C.Button onClick={handleNextClick}>
          Próximo
          <img src={SetaDireita} alt="Próximo" />
        </C.Button>
      </C.Footer>
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={keyboardLayouts}
        theme={'hg-theme-default myTheme1'}
      />
      <ErrorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        messages={errors}
      />
    </C.Container>
  );
};

export default FirstStep;

const keyboardLayouts = {
  default: [
    "\u005c 1 2 3 4 5 6 7 8 9 0 ' {bksp}",
    '{tab} q w e r t y u i o p [ Acentos',
    '{lock} a s d f g h j k l ç ] {enter}',
    '{shift} \\ z x c v b n m , . - {shift}',
    '.com @ {space}',
  ],
  shift: [
    '| ! " # $ % ¨ & * ( ) _ {bksp}',
    '{tab} Q W E R T Y U I O P { [ Acentos',
    '{lock} A S D F G H J K L Ç } ] {enter}',
    '{shift} | Z X C V B N M < > _ {shift}',
    '.com @ {space}',
  ],
  accents: [
    'Á É Í Ó Ú À È Ì Ò Ù Â Ê Î Ô Û Ã Õ Ç {bksp}',
    'á é í ó ú à è ì ò ù â ê î ô û ã õ ç Padrão',
    '{lock} á é í ó ú à è ì ò ù â ê î ô û ã õ ç {enter}',
    '{shift} á é í ó ú à è ì ò ù â ê î ô û ã õ ç {shift}',
    '.com @ {space}',
  ],
};
