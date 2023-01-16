import React from "react";
import styles from "./Header.css";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

export default function Header() {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}
