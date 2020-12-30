import axios from 'axios';
import { BASE_URL, TOKEN } from '../constants/env';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `bearer ${TOKEN}`
  }
});

export const fetcher = (url) => api.get(url).then(res => res.data);
