import { useParams, useLocation } from 'react-router-dom';
import * as C from './styles';
import logo from '../../../../../main/assets/icons/small/Logo_Vertical.png';
import textIcon from '../../../../../main/assets/icons/small/Texto-marrom.svg';
import chatIcon from '../../../../../main/assets/icons/small/chat.svg';

import ReportCard from 'presentation/components/atoms/ReportCard';

const TextDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const imageUrl =
    (location.state as { imageUrl: string })?.imageUrl ||
    'default-image-url.jpg';

  // Dados estáticos para exemplo
  const text = {
    id,
    type: 'text',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque nec ex ac aliquet. Nunc id libero quis nisl faucibus condimentum. Cras non malesuada enim, eu gravida magna. Sed et sapien id magna blandit sagittis at a justo. Pellentesque facilisis neque ac condimentum malesuada. Sed suscipit auctor arcu sit amet cursus. Vivamus eu arcu non ex fermentum molestie nec vel odio. Donec vitae interdum felis. Curabitur vel massa vitae neque cursus interdum. Mauris scelerisque est facilisis condimentum lacinia. Morbi turpis nisl, ultrices eget dui a, dapibus rutrum libero. Vestibulum ac tempor nunc, vitae maximus nisl. In dapibus tempor gravida. Aenean venenatis euismod diam non vestibulum. Pellentesque vel risus id lacus pharetra consectetur. Duis sit amet magna lectus. Phasellus convallis vestibulum purus non mattis. Vivamus tortor lectus, efficitur eu enim ac, pulvinar malesuada leo. Nunc in augue placerat, vulputate enim ut, malesuada lorem. Integer et purus vel urna interdum porta tempor et ex. Proin rutrum lacus vitae sem ullamcorper, non malesuada lectus pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed commodo feugiat magna, non porta turpis auctor et. Quisque bibendum dui id magna faucibus facilisis. Proin eu eleifend metus. Phasellus ut leo porttitor, condimentum diam nec, suscipit orci. Nullam volutpat eros sem, nec ullamcorper leo facilisis sit amet. Ut vitae posuere massa, in condimentum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque nec ex ac aliquet. Nunc id libero quis nisl faucibus condimentum.',
    imageUrl: imageUrl,
  };

  return (
    <C.Container>
      <C.TextProfile>
        <C.Logo src={logo} alt="" />

        <C.TextImageGroup>
          <C.TextIcon src={textIcon} alt="" />
          <C.Image src={text.imageUrl} alt="Text Thumbnail" />
        </C.TextImageGroup>
      </C.TextProfile>
      <C.RelatoContent>
        <C.TextContent>
          <C.Text>{text.content}</C.Text>
        </C.TextContent>
      </C.RelatoContent>
      <ReportCard icon={chatIcon} content={text.content} />
    </C.Container>
  );
};

export default TextDetail;
