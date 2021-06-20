import axios from 'axios'
import { TripEditResponseShape, TripRequestShape } from 'constants/types'
import { BASE_URL, TOKEN, TRIP } from '../constants/env'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `bearer ${TOKEN}`,
  },
})

export const fetcher = (url: string) => api.get(url).then((res) => res.data)

export const postTrip = async (trip: TripRequestShape) =>
  await api.post<TripEditResponseShape>(TRIP, trip)

export const putTrip = async (id: string, data: TripRequestShape) =>
  await api.put<TripEditResponseShape>(`${TRIP}/${id}`, data)

export const deleteTrip = async (id: string) =>
  await api.delete<void>(`${TRIP}/${id}`)
