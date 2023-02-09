import tw from 'twin.macro';
import useMovieVideos from '@pages/Main/hooks/useMovieVideos';
import { POSTER_BASE_URL } from '@constants/tmdb';
import { getTrailingComma } from '@utils/getTrailingComma';
import { MovieDetail } from '@/types/movie';
import { ReactNode } from 'react';

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
const TagsWrapper = tw.div`text-sm leading-5 m-2 ml-0 break-words flex gap-1`;
const Tags = tw.div`flex items-center flex-wrap`;
const Title = tw.label`text-[#777] mr-1`;
const Tag = tw.span`text-[#ddd] cursor-pointer m-0 mr-1 outline-[#fff]`;

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed/';

type AboutRowProps = {
  title: string;
  tags: ReactNode;
};
const AboutRow = ({ title, tags }: AboutRowProps) => {
  return (
    <TagsWrapper>
      <Title>{title}:</Title>
      <Tags>{tags}</Tags>
    </TagsWrapper>
  );
};

const VIDEO_TYPE = 'Trailer';
const useTrailer = (movieId: number) => {
  const { data: movieVideos, isLoading, error } = useMovieVideos(movieId);
  const trailer = Array.isArray(movieVideos) ? movieVideos.find((video) => video.type === VIDEO_TYPE) : null;

  return { data: trailer, error, isLoading };
};

type MovieDetailProps = {
  movie: MovieDetail;
};
export const MovieDetailTemplate = ({ movie }: MovieDetailProps) => {
  const { data, isLoading, error } = useTrailer(movie.id);
  const youtubeKey = data?.key;

  return (
    <Container>
      {!error && !isLoading && youtubeKey && (
        <YoutubeEmbedFrame
          src={YOUTUBE_EMBED_BASE_URL + youtubeKey}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
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
export default MovieDetailTemplate;
