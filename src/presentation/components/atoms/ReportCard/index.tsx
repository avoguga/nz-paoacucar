import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sg } from 'presentation/styles';
import Button from '../Button';
import * as C from './styles';
import close from '../../../../main/assets/icons/small/Fechar.svg';
import { Modal } from 'presentation/components/molecules/ComentModal';

const ReportCard = ({
  icon,
  content,
  initialComments,
  depoimentoId,
  fetchDepoimento,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const sendComment = async (newCommentDetails) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/depoimentos/${depoimentoId}/comentarios`,
        newCommentDetails
      );
      const newComment = response.data;
      setComments((prevComments) => [...prevComments, newComment]);
      fetchDepoimento();
      closeModal();
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
    }
  };

  const formatDate = (dateString) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
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
          {comments.map((comment, index) => (
            <>
              <C.Comment key={index}>
                <strong>{comment.nome}</strong>
                <span>comentou em {formatDate(comment.data)}</span>
                <p>{comment.comentario}</p>
              </C.Comment>
              <C.HorizontalLine />
            </>
          ))}
        </C.Content>
      </C.Container>
      <Button
        backgroundColor={sg.colors.backgroundColors.colorBackgroundButtonOne}
        textColor={sg.colors.textColors.colorTextNeutral}
        onClick={openModal}
        style={{ fontWeight: '500' }}
        title="Comentar"
      >
        Comentar
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onClickButton={sendComment}
        testimonialPersonName={comments[0]?.nome || 'Unknown'}
      />
    </C.Main>
  );
};

export default ReportCard;
