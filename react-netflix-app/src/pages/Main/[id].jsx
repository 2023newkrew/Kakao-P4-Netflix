import tw from 'twin.macro';
import PropTypes from 'prop-types';

const Container = tw.div`w-full h-full bg-[#222222] z-0 px-10 box-border`;
const ContentSection = tw.section`w-full bg-transparent rounded-sm text-white text-sm overflow-hidden z-[2] will-change-transform`;
const AboutWrapper = tw.div`bg-[#222222] pb-10`;
const AboutHeader = tw.header`[& > h3]:text-2xl [& > h3]:mb-5 [& > h3]:font-medium [& > h3]:mt-10`;
const Tags = tw.div`text-sm leading-5 m-2 ml-0 break-words flex gap-1`;
const Title = tw.label`text-[#777] mr-1`;
const TagItem = tw.span`text-[#ddd] cursor-pointer m-0 outline-[#fff]`;
const RatingWrapper = tw.div`flex text-sm leading-5 mt-2`;
const Ratings = tw.div`flex`;
const MaturityDescription = tw.p`leading-5 text-sm`;
const Broadcaster = tw.div`text-sm leading-5`;
const CompanyList = tw.ul`inline-flex items-center flex-wrap`;
const Company = tw.li`mr-2 leading-5 text-sm`;

const MovieDetail = ({ movie }) => {
  return (
    <Container>
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
