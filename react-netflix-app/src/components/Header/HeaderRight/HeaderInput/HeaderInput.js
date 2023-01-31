import React, { useCallback, useEffect, useRef, useState } from "react";
import { HeaderInputBox } from "./styles";
import useAddEventListener from "../../../../util/hooks/useAddEventListener";
import { useNavigate } from "react-router-dom";
import Util from "../../../../util/class/Util";
import useDebounce from "../../../../util/hooks/useDebounce";
const DEBOUNCE_DELAY = 1000;
export default function HeaderInput() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const debouncedHandler = useDebounce((event) => {
    navigate(`/search/${event.target.value}`);
  }, DEBOUNCE_DELAY);

  return (
    <HeaderInputBox
      ref={inputRef}
      onChange={(event) => {
        setText(event.target.value);
        debouncedHandler(event);
      }}
      value={text}
    />
  );
}
