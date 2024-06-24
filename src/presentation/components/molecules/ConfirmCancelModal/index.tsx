import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #dc9327;
  opacity: 0.89;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 500px;
  width: 100%;
  h3,
  p {
    color: #ffff;
    font-size: 32px;
  }
  h3 {
    white-space: nowrap;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #f9b515;
  color: #000000;
  font-size: 30px;
  font-weight: 500;
  width: 200px;
  height: 43px;
  padding: 0.5rem 1rem;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: #d59e13;
  }
`;

interface IConfirmCancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmCancelModal: React.FC<IConfirmCancelModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Tem certeza que deseja cancelar?</h3>
        <p>O depoimento escrito será excluído permanentemente.</p>
        <ModalActions>
          <Button onClick={onConfirm}>Confirmar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConfirmCancelModal;
