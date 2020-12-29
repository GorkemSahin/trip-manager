import axios from 'axios';
import { BASE_URL, TOKEN } from '../constants/env';

// TODO maybe remove some headers later
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `bearer ${TOKEN}`
  }
});

export default instance;
