import React from 'react';
import Confirmar from '../../../../../main/assets/icons/small/Confirmar.svg';
import ReGravar from '../../../../../main/assets/icons/small/regravar.svg';
import Cancelar from '../../../../../main/assets/icons/small/Fechar.svg';
import * as C from './styles';

const PostRecordOptions = ({ onConfirm, onReRecord, onCancel }) => {
  return (
    <C.PostRecordContainer>
      <h2>Agora falta pouco,</h2>
      <p>
        Você pode <strong>ASSISTIR</strong> ao vídeo clicando nele. Se desejar
        descartá-lo e gravar novamente, clique em <strong>REGRAVAR</strong>. Se
        estiver satisfeito, clique em <strong>CONFIRMAR</strong> para exibi-lo
        imediatamente nos terminais. Para sair, clique em{' '}
        <strong>CANCELAR</strong>.
      </p>
      <C.ButtonGroup>
        <C.ButtonContainer>
          <C.Button onClick={onConfirm} type="button">
            <img src={Confirmar} alt="Confirmar" />
          </C.Button>
          <span onClick={onConfirm}>Confirmar</span>
        </C.ButtonContainer>
        <C.ButtonContainer>
          <C.Button onClick={onReRecord} type="button">
            <img src={ReGravar} alt="Regravar" />
          </C.Button>
          <span onClick={onReRecord}>Regravar</span>
        </C.ButtonContainer>
        <C.ButtonContainer>
          <C.Button onClick={onCancel} type="button">
            <img src={Cancelar} alt="Cancelar" />
          </C.Button>
          <span onClick={onCancel}>Cancelar</span>
        </C.ButtonContainer>
      </C.ButtonGroup>
    </C.PostRecordContainer>
  );
};

export default PostRecordOptions;
