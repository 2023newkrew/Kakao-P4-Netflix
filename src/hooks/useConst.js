import { useState } from 'react';

const useConst = (value) => useState(value)[0];

export default useConst;
