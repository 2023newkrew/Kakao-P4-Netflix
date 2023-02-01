import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.params = {
  api_key: process.env.REACT_APP_API_KEY,
  language: 'ko-KR',
};

export default function useAxios(method, url, config = null) {
  const configString = JSON.stringify(config);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const res = await axios[method](url, JSON.parse(configString));
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [method, url, configString]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [isLoading, data, error];
}
