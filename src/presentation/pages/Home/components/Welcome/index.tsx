import * as C from './styles';
import logo from '../../../../../main/assets/icons/ant/CCPA_logo_vertical.png';
import Button from 'presentation/components/atoms/Button';
import { sg } from 'presentation/styles';
const Welcome = () => {
  return (
    <C.Container>
      <C.WelcomeField>
        <C.Logo
          src={logo}
          alt="Logo da casa de cultura pão de açúcar alagoas"
        />

        <C.TextContainer>
          <h1> Seja bem-vindo!</h1>
          <p>
            Faça parte da preservação da memória de Pão de Açúcar. Conte sua
            história com a cidade, seja através de um texto ou gravando um
            vídeo. É simples e rápido deixar sua marca.
          </p>{' '}
          <br />
          <br />
          <Button
            backgroundColor={
              sg.colors.backgroundColors.colorBackgroundButtonTwo
            }
            text="Deixar Depoimento"
            onClick={() => {
              console.log('oi');
            }}
            title="Deixar Depoimento"
          />
        </C.TextContainer>
      </C.WelcomeField>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>AQUI VAI OUTRO COMPONENTE</h1>
    </C.Container>
  );
};

export default Welcome;
