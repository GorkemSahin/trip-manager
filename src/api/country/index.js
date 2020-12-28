import axios from '../../utils/axios';
import { COUNTRY } from '../../constants/env';

const fetchCountries = async () => {
  return await axios.get(COUNTRY);
};

export default { fetchCountries };
