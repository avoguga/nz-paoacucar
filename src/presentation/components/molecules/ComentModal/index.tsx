import React, { useState, useRef } from 'react';
import { sg } from 'presentation/styles';
import * as C from './styles';
import closeIcon from '../../../../main/assets/icons/small/Fechar.svg';
import confirmIcon from '../../../../main/assets/icons/small/Confirmar.svg';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import '../../molecules/GiveTestimonialModal/components/TextTestimonial/keyboardStyles.css';

export const Modal = ({
  isOpen,
  onClose,
  onClickButton,
  testimonialPersonName,
}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [layout, setLayout] = useState('default');
  const [inputName, setInputName] = useState('');
  const keyboard = useRef(null);

  const handleSubmit = () => {
    if (name.trim() && comment.trim()) {
      const newCommentDetails = {
        nome: name,
        comentario: comment,
        data: new Date().toISOString(),
      };
      onClickButton(newCommentDetails);
      setName('');
      setComment('');
      setCharCount(0);
    }
  };

  const onChange = (input) => {
    if (inputName === 'name') {
      setName(input);
    } else if (inputName === 'comment') {
      setComment(input);
      setCharCount(input.length);
    }
  };

  const onKeyPress = (button) => {
    if (button === '{shift}' || button === '{lock}') handleShift();
    if (button === '{accents}' || button === '{default}') {
      button === '{accents}' ? handleAccents() : handleDefault();
      return false; // Prevent button text from being inserted
    }
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
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
    if (event.target.name === 'comment') {
      setCharCount(value.length);
    }
    keyboard.current.setInput(value);
  };

  if (!isOpen) return null;

  return (
    <C.ModalOverlay>
      <C.ModalContainer>
        <C.ModalHeader>
          <C.ModalTitle>
            Comentando depoimento de <p>{testimonialPersonName}</p>
          </C.ModalTitle>
        </C.ModalHeader>
        <C.ModalBody>
          <C.Input
            placeholder="Seu nome"
            value={name}
            onChange={(e) => onChangeInput(e, setName)}
            onFocus={() => onFocusInput('name', name)}
          />
          <C.TextArea
            placeholder="Seu comentário"
            name="comment"
            // @ts-ignore
            maxLength="500"
            value={comment}
            onChange={(e) => onChangeInput(e, setComment)}
            onFocus={() => onFocusInput('comment', comment)}
          />
        </C.ModalBody>
        <C.ModalFooter>
          <C.CharCounter>
            {charCount} / 500 <p>caracteres</p>
          </C.CharCounter>
          <C.Button
            background="#F9B515"
            textColor={sg.colors.textColors.colorTextNeutral}
            onClick={handleSubmit}
            title="Confirmar"
          >
            <img src={confirmIcon} alt="Confirmar" />
            <span>Confirmar</span>
          </C.Button>
          <C.Button
            background="#F9B515"
            textColor={sg.colors.textColors.colorTextNeutral}
            onClick={onClose}
            title="Cancelar"
          >
            <img src={closeIcon} alt="Close" />
            <span>Cancelar</span>
          </C.Button>
        </C.ModalFooter>
      </C.ModalContainer>
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={keyboardLayouts}
        theme={'hg-theme-default myTheme1'}
      />
    </C.ModalOverlay>
  );
};

export const keyboardLayouts = {
  default: [
    "\u005c 1 2 3 4 5 6 7 8 9 0 ' {bksp}",
    '{tab} q w e r t y u i o p [ {accents}',
    '{lock} a s d f g h j k l ç ] {enter}',
    '{shift} \\ z x c v b n m , . - {shift}',
    '.com @ {space}',
  ],
  shift: [
    '| ! " # $ % ¨ & * ( ) _ {bksp}',
    '{tab} Q W E R T Y U I O P { [ {accents}',
    '{lock} A S D F G H J K L Ç } ] {enter}',
    '{shift} | Z X C V B N M < > _ {shift}',
    '.com @ {space}',
  ],
  accents: [
    'á é í ó ú à è ì ò ù â ê î ô û ä ë ï ö ü ã õ ç {bksp}',
    '{tab} Á É Í Ó Ú À È Ì Ò Ù Â Ê Î Ô Û Ä Ë Ï Ö Ü Ã Õ Ç {default}',
    '{lock} á é í ó ú à è ì ò ù â ê î ô û ä ë ï ö ü ã õ ç {enter}',
    '{shift} á é í ó ú à è ì ò ù â ê î ô û ä ë ï ö ü ã õ ç {shift}',
    '.com @ {space}',
  ],
};
