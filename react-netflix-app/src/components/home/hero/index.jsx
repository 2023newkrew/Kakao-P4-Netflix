import { getHero } from '@apis/home';
import { useEffect, useState } from 'react';
import { HeroContainer, HeroContent, HeroOverview, HeroTitle } from './styles';

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
        {lastestMovie && <HeroTitle>{lastestMovie.title}</HeroTitle>}
        {lastestMovie && <HeroOverview>{lastestMovie.overview}</HeroOverview>}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
