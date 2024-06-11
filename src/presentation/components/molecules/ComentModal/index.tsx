import { sg } from 'presentation/styles';
import * as C from './styles';
import Button from '../../atoms/Button';
import close from '../../../../main/assets/icons/small/Fechar.svg';
import confirmar from '../../../../main/assets/icons/small/Confirmar.png';

export const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <C.ModalOverlay>
      <C.ModalContainer>
        <C.ModalHeader>
          <C.ModalTitle>
            Comentando depoimento de <p>Camila Araujo</p>
          </C.ModalTitle>
        </C.ModalHeader>
        <C.ModalBody>
          <C.Input placeholder="Seu nome" />
          <C.TextArea placeholder="Seu comentário" maxLength="500" />
        </C.ModalBody>
        <C.ModalFooter>
          <C.CharCounter>
            104 / 500 <p>caracteres</p>
          </C.CharCounter>

          <C.Button
            background={'#F9B515'}
            textColor={sg.colors.textColors.colorTextNeutral}
            onClick={onSubmit}
            width={'263px'}
            title="Confirmar"
          >
            <img src={confirmar} alt="Confirmar" />
            <span>Confirmar</span>
          </C.Button>
          <C.Button
            background={'#F9B515'}
            textColor={sg.colors.textColors.colorTextNeutral}
            onClick={onClose}
            title="Cancelar"
            width={'263px'}
          >
            <img src={close} alt="Close" />
            <span>Cancelar</span>
          </C.Button>
        </C.ModalFooter>
      </C.ModalContainer>
    </C.ModalOverlay>
  );
};
