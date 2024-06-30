import * as C from './styles'; // Suponha que você tenha estilos definidos para o carregamento

const Loading = () => {
  return (
    <C.LoadingOverlay>
      <C.LoadingSpinner />
    </C.LoadingOverlay>
  );
};

export default Loading;
