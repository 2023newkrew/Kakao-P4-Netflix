import "App.css";
import { ModalProvider } from "components";
import Main from "pages/Main/Main";

function App() {
  return (
    <>
      <ModalProvider>
        <Main />
      </ModalProvider>
    </>
  );
}

export default App;
