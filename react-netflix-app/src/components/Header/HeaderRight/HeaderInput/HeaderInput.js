import React, { useState } from "react";
import { HeaderInputBox } from "./styles";

export default function HeaderInput() {
  const [text, setText] = useState("");

  return <HeaderInputBox onChange={(event) => setText(event.target.value)} value={text} />;
}
