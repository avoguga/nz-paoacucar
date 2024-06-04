import * as C from './styles';
import logo from '../../../../../main/assets/icons/ant/CCPA_logo_vertical.png';
import Button from 'presentation/components/atoms/Button';
import { sg } from 'presentation/styles';
import VideoCarousel, { CarouselItem } from '../VideoCarousel';
import image1 from '../../../../../main/assets/images/background/depoimento-1.webp';
import image2 from '../../../../../main/assets/images/background/depoimento-2.webp';
import video1 from '../../../../../main/assets/videos/sample_640x360.mp4';
import video2 from '../../../../../main/assets/videos/sample_640x360.mp4';

const Welcome = () => {
  const items: CarouselItem[] = [
    { type: 'video', content: video1 },
    { type: 'video', content: video2 },
    { type: 'text', content: '/relatos', imageUrl: image1 },
    { type: 'text', content: '/relatos', imageUrl: image2 },
    { type: 'video', content: video1 },
    { type: 'text', content: '/relatos', imageUrl: image1 },
    { type: 'video', content: video2 },
    { type: 'text', content: '/relatos', imageUrl: image2 },
  ];

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
              sg.colors.backgroundColors.colorBackgroundButtonOne
            }
            textColor={sg.colors.textColors.colorTextNeutral}
            onClick={() => {
              console.log('oi');
            }}
            style={{
              fontWeight: '500',
            }}
            title="Deixar Depoimento"
          >
            Deixar Depoimento
          </Button>
        </C.TextContainer>
      </C.WelcomeField>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        backgroundColor={sg.colors.backgroundColors.colorBackgroundButtonTwo}
        onClick={() => {
          console.log('oi');
        }}
        title="Galeria de depoimentos"
        style={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
        }}
        width="20rem"
        height="3rem"
      >
        Galeria de depoimentos
      </Button>{' '}
      <br /> <br />
      <VideoCarousel items={items} />
    </C.Container>
  );
};

export default Welcome;
