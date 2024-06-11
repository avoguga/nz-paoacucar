import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sg } from 'presentation/styles';
import Button from '../Button';
import * as C from './styles';
import close from '../../../../main/assets/icons/small/Fechar.svg';
import { Modal } from 'presentation/components/molecules/ComentModal';

const ReportCard = ({ icon, content }) => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const submitComment = () => {
    console.log('Comment submitted');
    closeModal();
  };

  return (
    <C.Main>
      <C.CloseButton onClick={() => navigate('/relatos')}>
        <img src={close} alt="Close" />
      </C.CloseButton>
      <C.Container>
        <C.Profile>
          <C.Icon src={icon} alt="Icon" />
        </C.Profile>
        <C.Content>
          <C.Text>{content}</C.Text>
        </C.Content>
      </C.Container>
      <Button
        backgroundColor={sg.colors.backgroundColors.colorBackgroundButtonOne}
        textColor={sg.colors.textColors.colorTextNeutral}
        onClick={openModal}
        style={{
          fontWeight: '500',
        }}
        title="Comentar"
      >
        Comentar
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={submitComment}
      />
    </C.Main>
  );
};

export default ReportCard;
