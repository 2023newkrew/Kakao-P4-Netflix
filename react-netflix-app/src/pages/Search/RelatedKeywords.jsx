import tw from 'twin.macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Keywords = tw.ul`flex flex-wrap`;
const Keyword = tw.li`px-2.5 border-r border-r-gray-600 [flex: 0 auto] text-[14px] last-of-type:border-none`;

const RelatedKeyword = ({ keyword }) => {
  return (
    <Keyword>
      <Link to={`/search?q=${keyword}`}>{keyword}</Link>
    </Keyword>
  );
};
RelatedKeyword.propTypes = {
  keyword: PropTypes.string,
};

const RelatedKeywords = ({ keywords }) => {
  return (
    <Keywords>
      {keywords.map(({ name, id }) => (
        <RelatedKeyword keyword={name} key={id} />
      ))}
    </Keywords>
  );
};
RelatedKeywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.object),
};
export default RelatedKeywords;
