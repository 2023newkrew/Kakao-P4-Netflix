import React from "react";
import MainPost from "./MainPost/MainPost.js";
import MainRow from "./MainRow/MainRow.js";

export default function Main() {
  return (
    <div className="main">
      <MainPost />
      <MainRow />
    </div>
  );
}
