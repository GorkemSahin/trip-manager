import axios from 'axios';
import { BASE_URL, TOKEN, TRIP } from '../constants/env';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `bearer ${TOKEN}`
  }
});

export const fetcher = (url) => api.get(url).then(res => res.data);

export const postTrip = async (data) => await api.post(TRIP, data);

export const putTrip = async (id, data) => await api.put(`${TRIP}/${id}`, data);

export const deleteTrip = async (id) => await api.delete(`${TRIP}/${id}`);
