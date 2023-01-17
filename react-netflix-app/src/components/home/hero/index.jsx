import { getHero } from '@apis/home';
import { useEffect, useState } from 'react';
import { HeroContainer, HeroContent, HeroTitle } from './styles';

const Hero = () => {
  const [lastestMovie, setLatestMovie] = useState(null);

  useEffect(() => {
    const fetchLatestMovie = async () => {
      const data = await getHero();
      setLatestMovie(data);
    };
    fetchLatestMovie();
  }, []);

  return (
    <HeroContainer backdropPath={lastestMovie?.backdrop_path}>
      <HeroContent>
        {lastestMovie && <HeroTitle>{lastestMovie.original_title}</HeroTitle>}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
