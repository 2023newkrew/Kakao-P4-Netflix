import { useEffect, useState } from 'react';

type Props = {
  previewUrl: string;
  originalUrl: string;
  load: boolean;
};
const usePreviewImage = ({ previewUrl, originalUrl, load }: Props) => {
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
