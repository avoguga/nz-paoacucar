import React from 'react';
import * as C from './styles';
import fecharIcon from '../../../../main/assets/icons/small/Fechar.svg';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: string[];
}
const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  messages,
}) => {
  if (!isOpen) return null;

  return (
    <C.ModalOverlay>
      <C.ModalContent>
        <C.CloseButton onClick={onClose}>
          <img src={fecharIcon} alt="Fechar" />
        </C.CloseButton>
        <C.ModalTitle>Por favor, preencha os campos obrigatórios</C.ModalTitle>
        <C.ErrorList>
          {messages.map((msg, index) => (
            <C.ErrorItem key={index}>{msg}</C.ErrorItem>
          ))}
        </C.ErrorList>
        <C.Button onClick={onClose}>Fechar</C.Button>
      </C.ModalContent>
    </C.ModalOverlay>
  );
};

export default ErrorModal;
