import HomePage from "./pages/homePage/HomePage"
import { createGlobalStyle } from 'styled-components';
 
// Estilos definidos aqui serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  /* Outros estilos globais */
`;
function App() {
  return (
    <div>
      <GlobalStyle/>
      <HomePage/>
    </div>
  );
}

export default App;
