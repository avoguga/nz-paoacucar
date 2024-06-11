import { useNavigate } from 'react-router-dom';
import { sg } from 'presentation/styles';
import Button from '../Button';
import * as C from './styles';

import close from '../../../../main/assets/icons/small/Fechar.svg';

const ReportCard = ({ icon, content }: { icon: string; content: string }) => {
  const navigate = useNavigate();

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
        onClick={() => {
          console.log('ayel aqui é o orn');
        }}
        style={{
          fontWeight: '500',
        }}
        title="Comentar"
      >
        Comentar
      </Button>
    </C.Main>
  );
};

export default ReportCard;
