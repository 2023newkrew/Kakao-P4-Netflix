import { useMemo } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
const useConst = (init) => useMemo(init, []);

export default useConst;
