import api from '../../api';
import { takeLeading } from '@redux-saga/core/effects';

const constants = {
  FETCH_COUNTRIES: '@COUNTRY_FETCH_ALL'
};

export const actions = {
  fetchCountries: (onSuccess) => ({
    type: constants.FETCH_COUNTRIES,
    onSuccess
  })
};

const sagaFunctions = {
  fetchCountries: function * (action) {
    try {
      const resp = yield api.country.fetchCountries();
      action.onSuccess(resp.data);
    } catch (e) {
      console.log(e);
      if (action.onFail) action.onFail();
    }
  },
  watchFetchCountries: function * () {
    yield takeLeading(constants.FETCH_COUNTRIES, this.fetchCountries);
  }
};

// TODO define and execute watchers here
export const sagas = [
  sagaFunctions.watchFetchCountries()
];
