import tw from 'twin.macro';
import PropTypes from 'prop-types';

import useMovieVideos from '@/pages/Main/hooks/useMovieVideos';
import { POSTER_BASE_URL } from '@constants/tmdb';
import { getTrailingComma } from '@utils/getTrailingComma';

const Container = tw.div`w-full h-full bg-[#222222] z-0 box-border`;
const ContentSection = tw.section`p-10 w-full bg-transparent rounded-sm text-white text-sm overflow-hidden z-[2] will-change-transform mb-4`;
const YoutubeEmbedFrame = tw.iframe`w-full h-auto aspect-video`;
const InfoWrapper = tw.div`flex items-start gap-1`;
const BasicInfo = tw.div`flex-[2] min-w-[50%]`;
const MoviePosterWrapper = tw.div`flex-1 mr-4`;
const MovieTitle = tw.h2`text-2xl mb-5 font-medium`;
const MovieOverview = tw.p`mb-5`;

const AboutWrapper = tw.div`pb-10`;
const AboutHeader = tw.header`[& > h3]:text-2xl [& > h3]:mb-5 [& > h3]:font-medium`;
const Tags = tw.div`text-sm leading-5 m-2 ml-0 break-words flex gap-1`;
const Title = tw.label`text-[#777] mr-1`;
const Tag = tw.span`text-[#ddd] cursor-pointer m-0 outline-[#fff]`;

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/';

const AboutRow = ({ title, tags }) => {
  return (
    <Tags>
      <Title>{title}:</Title>
      {tags}
    </Tags>
  );
};
AboutRow.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.node,
};

const VIDEO_TYPE = 'Trailer';
const useTrailer = (movieId) => {
  const { data: movieVideos, isLoading, isError } = useMovieVideos(movieId);
  const trailer = Array.isArray(movieVideos) ? movieVideos.find((video) => video.type === VIDEO_TYPE) : null;

  return { data: trailer, isError, isLoading };
};

const MovieDetail = ({ movie }) => {
  const { data, isLoading, isError } = useTrailer(movie.id);
  const youtubeKey = data?.key;

  if (isLoading) {
    return <Container>Loading...</Container>;
  }
  return (
    <Container>
      {!isError && youtubeKey && (
        <YoutubeEmbedFrame
          src={YOUTUBE_EMBED_BASE_URL + youtubeKey}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></YoutubeEmbedFrame>
      )}

      <ContentSection>
        <InfoWrapper>
          <MoviePosterWrapper>
            <img src={POSTER_BASE_URL + movie.poster_path} alt="영화 포스터" />
          </MoviePosterWrapper>
          <BasicInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieOverview>{movie.overview}</MovieOverview>
            <AboutWrapper>
              <AboutHeader>
                <h3>상세 정보</h3>
              </AboutHeader>
              <div>
                <AboutRow
                  title="장르"
                  tags={movie.genres.map(({ id, name }, index) => (
                    <Tag key={id}>
                      {name}
                      {getTrailingComma(movie.genres, index)}
                    </Tag>
                  ))}
                />
                <AboutRow title="상영시간" tags={<Tag>{movie.runtime}분</Tag>} />
                <AboutRow title="관람등급" tags={<Tag>{movie.adult ? '19세 이상' : '19세 이하 가능'}</Tag>} />
                <AboutRow
                  title="배급사"
                  tags={movie.production_companies.map((company, index) => {
                    return (
                      <Tag key={company.id}>
                        {company.name}
                        {getTrailingComma(movie.production_companies, index)}
                      </Tag>
                    );
                  })}
                />
                <AboutRow title="개봉일" tags={<p>{movie.release_date}</p>} />
              </div>
            </AboutWrapper>
          </BasicInfo>
        </InfoWrapper>
      </ContentSection>
    </Container>
  );
};
MovieDetail.propTypes = {
  movie: PropTypes.object,
};
export default MovieDetail;
