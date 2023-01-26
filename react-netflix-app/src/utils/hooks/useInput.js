import { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return { inputValue, handleChange };
};
export default useInput;
