import React, { useState, useRef } from 'react';
import * as C from './styles';
import Text from '../../../../../../main/assets/icons/small/Texto-marrom.svg';
import SetaDireita from '../../../../../../main/assets/icons/small/seta direita.svg';
import SetaEsquerda from '../../../../../../main/assets/icons/small/seta esquerda.svg';
import ErrorModal from '../../../../atoms/ErrorModal';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './keyboardStyles.css';

interface FirstStepTextProps {
  onBackClick?: () => void;
  onNextClick?: (data: {
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
  const [errors, setErrors] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputName, setInputName] = useState('');
  const [layout, setLayout] = useState('default');
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
      const depoimentoData = {
        nome,
        email,
        telefone,
      };
      onNextClick && onNextClick(depoimentoData);
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
        layout={{
          default: [
            "\u005c 1 2 3 4 5 6 7 8 9 0 ' {bksp}",
            '{tab} q w e r t y u i o p \u00b4 [',
            '{lock} a s d f g h j k l ç ~ ] {enter}',
            '{shift} \\ z x c v b n m , . - {shift}',
            '.com @ {space}',
          ],
          shift: [
            '| ! " # $ % ¨ & * ( ) _ {bksp}',
            '{tab} Q W E R T Y U I O P ` {',
            '{lock} A S D F G H J K L Ç ^ } {enter}',
            '{shift} | Z X C V B N M < > _ {shift}',
            '.com @ {space}',
          ],
        }}
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

export default FirstStepText;
