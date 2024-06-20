import React from 'react';
import * as C from './styles';
import ConfirmIcon from '../../../../../../main/assets/icons/small/Confirmar.png';
import RetakeIcon from '../../../../../../main/assets/icons/small/Regravar-Outra_foto.png';
import CancelIcon from '../../../../../../main/assets/icons/small/Fechar.svg';
import logo from '../../../../../../main/assets/icons/ant/logo horizontal 150ppi.svg';

interface FifthStepPhotoConfirmProps {
  photo: string;
  onRetake: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const FifthStepPhotoConfirm: React.FC<FifthStepPhotoConfirmProps> = ({
  photo,
  onRetake,
  onConfirm,
  onCancel,
}) => {
  return (
    <C.Container>
      <C.LogoContainer>
        <img
          src={logo}
          alt="logo"
          style={{
            width: '425px',
            height: '100px',
          }}
        />
      </C.LogoContainer>
      <C.HeaderCapture>
        <C.PhotoContainer>
          <C.CapturedImage src={photo} alt="Captured Photo" />
        </C.PhotoContainer>
        <C.FiveStepGroup>
          <h3>
            <span>Agora falta pouco, </span>
            <br /> <br />
            Essa é a foto que será exibida junto ao depoimento, se desejar
            descartá-la e tirar outra, clique em TIRAR OUTRA FOTO. Se estiver
            satisfeito, clique em CONFIRMAR para exibi-lo imediatamente nos
            terminais. Para sair, clique em CANCELAR.
          </h3>
          <C.FiveStepButton onClick={onConfirm}>
            <img src={ConfirmIcon} alt="Confirmar" />
            <h2>Confirmar</h2>
          </C.FiveStepButton>
          <C.FiveStepButton onClick={onRetake}>
            <img src={RetakeIcon} alt="Tirar outra foto" />
            <h2>Tirar outra foto</h2>
          </C.FiveStepButton>
          <C.FiveStepButton onClick={onCancel}>
            <img src={CancelIcon} alt="Cancelar" />
            <h2>Cancelar</h2>
          </C.FiveStepButton>
        </C.FiveStepGroup>
      </C.HeaderCapture>
    </C.Container>
  );
};

export default FifthStepPhotoConfirm;
