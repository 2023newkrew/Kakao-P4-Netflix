import { useRef } from 'react';

const useConst = (init) => useRef(init).current;

export default useConst;
