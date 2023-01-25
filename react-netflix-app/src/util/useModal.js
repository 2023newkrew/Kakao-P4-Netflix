import React, { useEffect, useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return [isModalOpen, toggle];
}
