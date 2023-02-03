import { Link } from 'react-router-dom';
import { ROUTE, ROUTE_PATH } from '@/constants/route';
import { RegisterParagraph } from './styles';

const RegisterText = () => (
  <RegisterParagraph>
    Don&apos;t have an account?{' '}
    <Link to={`${ROUTE_PATH[ROUTE.ACCOUNT]}${ROUTE_PATH[ROUTE.REGISTER]}`}>Register</Link>
  </RegisterParagraph>
);

export default RegisterText;
