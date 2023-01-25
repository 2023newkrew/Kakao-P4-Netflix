import ReactDom from "react-dom";

import React from "react";

export default function ModalPortal(props) {
  return ReactDom.createPortal(props.children, document.body);
}
