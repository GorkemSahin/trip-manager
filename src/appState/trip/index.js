import api from '../../api';
import { takeLeading, put } from '@redux-saga/core/effects';
import { createSelector } from 'reselect';

const constants = {
  initialState: [],
  FETCH_TRIPS: '@TRIP_FETCH_ALL',
  FETCH_TRIP: '@TRIP_FETCH',
  POST_TRIP: '@TRIP_POST',
  PUT_TRIP: '@TRIP_PUT',
  SET_TRIPS: '@TRIP_SET'
};

export const actions = {
  fetchTrip: (id, onSuccess, onFail) => ({
    type: constants.FETCH_TRIP,
    id,
    onSuccess,
    onFail
  }),
  fetchTrips: (onFail) => ({
    type: constants.FETCH_TRIPS,
    onFail
  }),
  setTrips: (trips) => ({
    type: constants.SET_TRIPS,
    trips
  }),
  postTrip: (trip, onSuccess, onFail) => ({
    type: constants.POST_TRIP,
    trip,
    onSuccess,
    onFail
  })
};

const sagaFunctions = {
  fetchTrip: function * (action) {
    try {
      const resp = yield api.trip.fetchTrip(action.id);
      action.onSuccess(resp);
    } catch (e) {
      console.log(e);
      if (action.onFail) action.onFail();
    }
  },
  fetchTrips: function * (action) {
    try {
      const resp = yield api.trip.fetchTrip();
      yield put(actions.setTrips(resp.data));
    } catch (e) {
      console.log(e);
      if (action.onFail) action.onFail();
      yield put(actions.setTrips([]));
    }
  },
  postTrip: function * (action) {
    try {
      console.log(action.trip);
      const resp = yield api.trip.postTrip(action.trip);
      action.onSuccess(resp);
    } catch (e) {
      console.log(e.response.data.error);
      if (action.onFail) action.onFail();
    }
  },
  watchFetchTrip: function * () {
    yield takeLeading(constants.FETCH_TRIP, this.fetchTrip);
  },
  watchFetchTrips: function * () {
    yield takeLeading(constants.FETCH_TRIPS, this.fetchTrips);
  },
  watchPostTrip: function * () {
    yield takeLeading(constants.POST_TRIP, this.postTrip);
  }
};

// TODO define and execute watchers here
export const sagas = [
  sagaFunctions.watchFetchTrip(),
  sagaFunctions.watchFetchTrips(),
  sagaFunctions.watchPostTrip()
];

export const reducer = (state = constants.initialState, action) => {
  switch (action.type) {
    case constants.SET_TRIPS:
      return [...action.trips];
    default:
      return state;
  }
};

export const selectors = {
  allTripsSelector: createSelector(
    (state) => state.trip,
    (trips) => trips
  )
};
