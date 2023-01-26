import PropTypes from 'prop-types';
import { HeroContainer, HeroContent, HeroOverview, HeroTitle } from './styles';

const Hero = ({ movie }) => {
  const { backdrop_path: background, title, overview } = movie;

  return (
    <HeroContainer backdropPath={background}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroOverview>{overview}</HeroOverview>
      </HeroContent>
    </HeroContainer>
  );
};

Hero.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Hero;
