import ReactDom from "react-dom";

export default function ModalPortal(props: { children: React.ReactNode }) {
  return ReactDom.createPortal(props.children, document.body);
}
