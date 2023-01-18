import { useEffect, useState } from 'react';

const ScreenWidthQuery = {
  XS: '(max-width: 479px)',
  S: '(min-width: 480px) and (max-width: 767px)',
  M: '(min-width: 768px) and (max-width: 1023px)',
  L: '(min-width: 1024px) and (max-width: 1279px)',
  XL: '(min-width: 1280px)',
};

const ScreenWidthQueryToSizeString = {
  [ScreenWidthQuery.XS]: 'xs',
  [ScreenWidthQuery.S]: 's',
  [ScreenWidthQuery.M]: 'm',
  [ScreenWidthQuery.L]: 'l',
  [ScreenWidthQuery.XL]: 'xl',
};

const createMqls = () => Object.values(ScreenWidthQuery).map(window.matchMedia);

const useScreenWidthSize = () => {
  const [mqls] = useState(createMqls);
  const [matchedScreenWidthQuery, setMatchedScreenWidthQuery] = useState(
    () => mqls.find(({ matches }) => matches).media
  );

  useEffect(() => {
    const handleChangeEvent = ({ matches, media }) => {
      if (matches) setMatchedScreenWidthQuery(media);
    };

    mqls.forEach((mql) => mql.addEventListener('change', handleChangeEvent));
    return () => {
      mqls.forEach((mql) =>
        mql.removeEventListener('change', handleChangeEvent)
      );
    };
  }, [mqls]);

  return ScreenWidthQueryToSizeString[matchedScreenWidthQuery];
};

export default useScreenWidthSize;
