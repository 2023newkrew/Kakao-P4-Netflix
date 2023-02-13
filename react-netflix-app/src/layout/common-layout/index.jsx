import PropTypes from 'prop-types';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

const CommonLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommonLayout;
