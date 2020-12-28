import axios from '../../utils/axios';
import { TRIP } from '../../constants/env';

/*
const fetchTrips = async () => {
  return await axios.get(TRIP);
};

const fetchTrip = async (id) => {
  return await axios.get(`${ TRIP }/${ id }`);
};
*/

const fetchTrip = async (id) => {
  return await axios.get(`${ TRIP }${ id ? `/${ id }` : ''}`);
};

const postTrip = async (trip) => {
  return await trip.id ? axios.put(`${ TRIP }/${ trip.id }`, trip) : axios.post(TRIP, trip);
};

export default { fetchTrip, postTrip };
