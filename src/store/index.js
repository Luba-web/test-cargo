import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import polylineReducer from './polylineSlice';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    polyline: polylineReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);
