import "App.css";
import { ModalProvider } from "components";
import Main from "pages/Main/Main";
import Router from "Router";

function App() {
  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
}

export default App;
