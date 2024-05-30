import Welcome from './components/Welcome';
import * as C from './styles';
export interface HomeElementProps {}

interface HomeProps extends HomeElementProps {}

const Home = ({}: HomeProps) => {
  return (
    //essa div toda vai ser um componente.
    <C.Main>
      <Welcome />
    </C.Main>
  );
};

export default Home;
