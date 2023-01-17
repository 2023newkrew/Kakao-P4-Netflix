import axios from 'axios';

export default class Api {
  constructor(props) {
    const { baseURL } = props;
    this.instance = axios.create({ baseURL });
  }
  fetchData(url) {
    return this.instance.get(url);
  }
}
