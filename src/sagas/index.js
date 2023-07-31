import { all } from 'redux-saga/effects';
import polylineSaga from './polylineSaga';

export default function* rootSaga() {
  yield all([polylineSaga()]);
}
