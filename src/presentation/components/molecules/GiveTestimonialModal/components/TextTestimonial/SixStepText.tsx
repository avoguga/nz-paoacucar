import styled from 'styled-components';
import Logo from '../../../../../../main/assets/icons/ant/logo vertical 150ppi.svg';
import HomeIcon from '../../../../../../main/assets/icons/small/Inicio.svg';
import { sg } from 'presentation/styles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100%;
  height: 100vh;
  background-color: ${sg.colors.backgroundColors.colorBackgroundSolo};
  padding: 20px;
`;

const LogoContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  gap: 80px;
  justify-content: end;
  align-items: end;

  flex-direction: row;
  img {
    width: auto;
    height: 300px;
  }
`;

const ThankYouMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 55px;
    color: ${sg.colors.textColors.colorTextDefault};
    margin: 0;
  }

  p {
    font-size: 30px;

    color: ${sg.colors.textColors.colorTextDefault};
    margin: 10px 0 0 0;
  }
`;

const HomeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: ${sg.colors.textColors.colorTextDefault};
  row-gap: 15px;

  img {
    width: 50px;
  }
`;

const SixStepText = ({ onClose }: { onClose: () => void }) => {
  const handleHomeClick = () => {
    onClose();
  };

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Museu de Arte e Cultura Joaozinho Lisboa" />
      </LogoContainer>
      <ThankYouMessage>
        <h1>Obrigado,</h1>
        <p>
          Seu depoimento foi inserido no banco <br /> de dados e já pode ser
          visto nos <br /> terminais.
        </p>
        <br />
        <HomeButton onClick={handleHomeClick}>
          <img src={HomeIcon} alt="Início" />
          INÍCIO
        </HomeButton>
      </ThankYouMessage>
    </Container>
  );
};

export default SixStepText;
