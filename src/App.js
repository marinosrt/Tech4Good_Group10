import ModalContact from 'components/ModalContact/ModalContact';
import { GlobalStyle } from './GlobalStyles';
import Router from './routes/routes';
import { ModalContextProvider } from 'context/ModalContext';
import { UserContextProvider } from 'context/UserContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <ModalContextProvider>
          <ModalContact />
          <Router />
        </ModalContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
