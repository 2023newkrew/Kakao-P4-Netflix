import { getPopularMovies } from '@apis/movies';
import { Text } from '@components/Text';
import { useEffect, useState } from 'react';

export default function Main() {
  
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const fetchPopularMovies = async() => {
      const { data, status } = await getPopularMovies();
      console.log(data);
      setPopularMovies(data);
      setLoading(true);
    };
    fetchPopularMovies();
  }, []);

  if (!loading) return <></>;
  return (
    <Text>
      환영합니다.
    </Text>
  );
}