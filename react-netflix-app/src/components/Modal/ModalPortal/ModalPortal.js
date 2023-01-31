import ReactDom from "react-dom";

export default function ModalPortal(props) {
  return ReactDom.createPortal(props.children, document.body);
}
