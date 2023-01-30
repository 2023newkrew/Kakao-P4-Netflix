import React, { useCallback, useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = useCallback((content) => {
    setIsOpen(true);
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    openModal,
    closeModal,
    modalContent,
    isOpen,
  };
};

export default useModal;
