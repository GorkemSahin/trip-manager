import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import * as country from './country';
import * as trip from './trip';

// TODO merge all actions here and export from here

const reducer = combineReducers({
  trip: trip.reducer
});

function * allSagas() {
  yield all([
    ...trip.sagas,
    ...country.sagas
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(allSagas);

export default store;
