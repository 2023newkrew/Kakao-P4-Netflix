import { useState, useEffect } from "react";

const useFetch = (fetch, value) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      try {
        const response = await fetch;
        setData(response);
      } finally {
        setLoading(false);
      }
    }
  }, [value]);

  return { data, loading };
};

export default useFetch;
