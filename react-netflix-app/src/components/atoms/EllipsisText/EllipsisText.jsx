import React from "react";
import { EllipsisTextContainer } from "./EllipsisText.style";

const EllipsisText = ({ text, fontSize = "1vw", fontWeight = "normal", line = 2 }) => {
  return (
    <EllipsisTextContainer fontSize={fontSize} fontWeight={fontWeight} line={line}>
      {text}
    </EllipsisTextContainer>
  );
};

export default EllipsisText;
