import axios from 'axios';
import { BASE_URL, TOKEN, TRIP } from '../constants/env';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `bearer ${TOKEN}`
  }
});

export const fetcher = (url) => api.get(url).then(res => res.data);

export const post = async (id, data) => await id ? api.put(`${TRIP}/${id}`, data) : api.post(TRIP, data);
