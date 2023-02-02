import axios from 'axios';
import { ACCOUNT_HEADERS } from '@/configs/account';

const Account = axios.create({
  baseURL: process.env.REACT_APP_ACCOUNT_API_URL,
  headers: ACCOUNT_HEADERS,
});

export default Account;
