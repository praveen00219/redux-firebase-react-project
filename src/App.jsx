import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactListApp from "./pages/contactListApp/ContactListApp";

function App() {
  return (
    <>
      <ContactListApp />
      <ToastContainer />
    </>
  );
}

export default App;
