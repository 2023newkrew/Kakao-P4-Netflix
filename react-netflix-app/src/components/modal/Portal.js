import reactDom from "react-dom";

const Portal = ({ children }) => {
  const modalElement = document.getElementById("modal");
  return reactDom.createPortal(children, modalElement);
};

export default Portal;
