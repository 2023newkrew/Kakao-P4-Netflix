import { SetStateAction, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import { ReactComponent as SearchIcon } from '@icons/search.svg';
import useInput from '@hooks/useInput';
import useDebounce from '@hooks/useDebounce';
import { Dispatch } from 'react';

export const Container = tw.div`
  flex items-center h-10  bg-[rgb(0,0,0,40)] border border-white px-2
`;
export const Input = tw.input`
  bg-transparent h-full text-[14px] outline-0 ml-2
`;

const SEARCH_DELAY_MS = 300;
const useSearch = () => {
  const navigate = useNavigate();
  const { inputValue, handleChange } = useInput();
  const search = (value: string) => {
    const searchKeyword = value.trim();
    if (!searchKeyword) {
      navigate('/', { replace: true });
      return;
    }
    navigate(`/search?q=${searchKeyword}`, { replace: true });
  };

  useDebounce(
    inputValue,
    () => {
      search(inputValue);
    },
    SEARCH_DELAY_MS,
  );

  return {
    inputValue,
    handleChange,
  };
};

type SearchInputProps = {
  setCanSearch: Dispatch<SetStateAction<boolean>>;
};
const SearchInput = ({ setCanSearch }: SearchInputProps) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { inputValue, handleChange } = useSearch();

  useEffect(() => {
    if (!searchInputRef.current) {
      return;
    }
    searchInputRef.current.focus();
  }, []);

  return (
    <Container>
      <SearchIcon />
      <Input
        ref={searchInputRef}
        value={inputValue}
        onChange={handleChange}
        placeholder="제목"
        onBlur={() => {
          if (searchInputRef.current?.value) {
            return;
          }
          setCanSearch(false);
        }}
      />
    </Container>
  );
};
export default SearchInput;
