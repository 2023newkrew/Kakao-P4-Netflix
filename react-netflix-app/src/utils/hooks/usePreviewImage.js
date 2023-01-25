import { useEffect, useState } from 'react';

const usePreviewImage = ({ previewUrl, originalUrl, load }) => {
  const [srcUrl, setSrcUrl] = useState(previewUrl);

  useEffect(() => {
    if (!load || srcUrl === originalUrl) {
      return;
    }

    const image = new Image();
    image.onload = () => {
      setSrcUrl(originalUrl);
    };
    image.src = originalUrl;
  }, [load]);

  return srcUrl;
};
export default usePreviewImage;
