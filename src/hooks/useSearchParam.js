import { useSearchParams } from 'react-router-dom';

const useSearchParam = (name) => {
  const [searchParams] = useSearchParams();

  return searchParams.get(name);
};

export default useSearchParam;
