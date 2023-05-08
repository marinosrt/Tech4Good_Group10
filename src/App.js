import ModalContact from 'components/ModalContact/ModalContact';
import { GlobalStyle } from './GlobalStyles';
import Router from './routes/routes';
import { ModalProvider } from 'applications/ModalContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <ModalContact />
        <Router />
      </ModalProvider>
    </>
  );
}

export default App;
