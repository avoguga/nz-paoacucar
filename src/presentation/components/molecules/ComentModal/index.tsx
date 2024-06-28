import React, { useState } from 'react';
import { sg } from 'presentation/styles';
import * as C from './styles';
import closeIcon from '../../../../main/assets/icons/small/Fechar.svg';
import confirmIcon from '../../../../main/assets/icons/small/Confirmar.svg';

export const Modal = ({
  isOpen,
  onClose,
  onClickButton,
  testimonialPersonName,
}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [charCount, setCharCount] = useState(0);

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
            onChange={(e) => setName(e.target.value)}
          />
          <C.TextArea
            placeholder="Seu comentário"
            // @ts-ignore
            maxLength="500"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setCharCount(e.target.value.length);
            }}
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
    </C.ModalOverlay>
  );
};
