import { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return { inputValue, handleChange };
};
export default useInput;
