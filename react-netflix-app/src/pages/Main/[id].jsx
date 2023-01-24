import { useEffect, useState } from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import { getMovieVideos } from '@api/movies';

const Container = tw.div`w-full h-full bg-[#222222] z-0 p-10 box-border`;
const ContentSection = tw.section`w-full bg-transparent rounded-sm text-white text-sm overflow-hidden z-[2] will-change-transform mb-4`;
const YoutubeEmbedFrame = tw.iframe`w-full h-auto aspect-video`;
const InfoWrapper = tw.div`flex items-start gap-1`;
const BasicInfo = tw.div`flex-[2] min-w-[50%]`;
const MoviePosterWrapper = tw.div`flex-1 mr-4`;
const MovieTitle = tw.h2`text-2xl mb-5 font-medium`;
const ExtraInfo = tw.div``;

const AboutWrapper = tw.div`pb-10`;
const AboutHeader = tw.header`[& > h3]:text-2xl [& > h3]:mb-5 [& > h3]:font-medium`;
const Tags = tw.div`text-sm leading-5 m-2 ml-0 break-words flex gap-1`;
const Title = tw.label`text-[#777] mr-1`;
const TagItem = tw.span`text-[#ddd] cursor-pointer m-0 outline-[#fff]`;
const RatingWrapper = tw.div`flex text-sm leading-5 mt-2`;
const Ratings = tw.div`flex`;
const MaturityDescription = tw.p`leading-5 text-sm`;
const Broadcaster = tw.div`text-sm leading-5`;
const CompanyList = tw.ul`inline-flex items-center flex-wrap`;
const Company = tw.li`mr-2 leading-5 text-sm`;

const useMovieVideos = (movieId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    (async function () {
      try {
        const { data } = await getMovieVideos(movieId);
        setData(data.results);
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return {
    isLoading,
    isError,
    error,
    data,
  };
};
const useTrailer = (movieId) => {
  const { data: movieVideos, isLoading, isError } = useMovieVideos(movieId);
  const trailer = Array.isArray(movieVideos) ? movieVideos.find((video) => video.type === 'Trailer') : null;
  return { data: trailer, isError, isLoading };
};
const MovieDetail = ({ movie }) => {
  const { data, isLoading, isError } = useTrailer(movie?.id);
  const youtubeKey = data?.key;

  if (isLoading) {
    return <Container>Loading...</Container>;
  }
  return (
    <Container>
      <ContentSection>
        {!isError && (
          <YoutubeEmbedFrame
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></YoutubeEmbedFrame>
        )}
      </ContentSection>
      <ContentSection>
        <InfoWrapper>
          <MoviePosterWrapper>
            <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="영화 포스터" />
          </MoviePosterWrapper>
          <BasicInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <p>{movie.overview}</p>
          </BasicInfo>
          <ExtraInfo>
            <Tags>
              <Title>개봉일</Title>
              <p>{movie.release_date}</p>
            </Tags>
          </ExtraInfo>
        </InfoWrapper>
      </ContentSection>
      <ContentSection>
        <AboutWrapper>
          <AboutHeader>
            <h3>{movie.title} 상세 정보</h3>
          </AboutHeader>
          <div>
            <Tags>
              <Title>장르:</Title>
              {movie.genres.map(({ id, name }, index) => (
                <TagItem key={id}>
                  {name}
                  {movie.genres.length - 1 > index ? ', ' : ''}
                </TagItem>
              ))}
            </Tags>
            <Tags>
              <Title>상영시간:</Title>
              <TagItem>{movie.runtime}분</TagItem>
            </Tags>
            <RatingWrapper>
              <Title>관람등급: </Title>
              <Ratings>
                <MaturityDescription>{movie.adult ? '19세 이상' : '19세 이하 가능'}</MaturityDescription>
              </Ratings>
            </RatingWrapper>
            <Broadcaster>
              <Tags>
                <Title>배급사: </Title>
                <CompanyList>
                  {movie.production_companies.map((company, index) => {
                    return (
                      <Company key={company.id}>
                        {company.name}
                        {movie.production_companies.length - 1 > index ? ',' : ''}
                      </Company>
                    );
                  })}
                </CompanyList>
              </Tags>
              <Tags>
                <Title>개봉일</Title>
                <p>{movie.release_date}</p>
              </Tags>
            </Broadcaster>
          </div>
        </AboutWrapper>
      </ContentSection>
    </Container>
  );
};
MovieDetail.propTypes = {
  movie: PropTypes.object,
};
export default MovieDetail;
