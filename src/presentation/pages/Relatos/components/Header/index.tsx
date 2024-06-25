import Button from 'presentation/components/atoms/Button';
import * as C from './styles';
import { sg } from 'presentation/styles';

import logo from '../../../../../main/assets/icons/ant/logo horizontal 300ppi.svg';
import HomeIcon from '../../../../../main/assets/icons/small/Inicio.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <C.HeaderContainer>
      <C.Logo src={logo} alt="logo da casa de cultura e pão de açúcar" />
      <Button
        backgroundColor={sg.colors.backgroundColors.colorBackgroundButtonTwo}
        onClick={() => navigate('/')}
        title="Galeria de depoimentos"
        style={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
        }}
        width="20rem"
        height="3rem"
      >
        Galeria de depoimentos
      </Button>
      <C.HomeIcon>
        <button onClick={() => navigate('/')} style={{ background: 'none' }}>
          <img src={HomeIcon} alt="" />
        </button>
        <h3>INÍCIO</h3>
      </C.HomeIcon>
    </C.HeaderContainer>
  );
};

export default Header;
