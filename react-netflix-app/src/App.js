import "App.css";
import { ModalProvider, ResponsiveProvider } from "contexts";
import Router from "Router";

function App() {
  return (
    <ResponsiveProvider>
      <ModalProvider>
        <Router />
      </ModalProvider>
    </ResponsiveProvider>
  );
}

export default App;
