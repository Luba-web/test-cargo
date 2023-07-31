import { call, put, takeLatest } from 'redux-saga/effects';
import { polylineActions } from '../store/polylineSlice';
import getPolyline from '../utils/api';

function* fetchRoute(action) {
  try {
    const response = yield call(getPolyline, action.payload);
    yield put(polylineActions.getPolylineSuccess(response));
  } catch (error) {
    yield put(polylineActions.getPolylineError(error));
  }
}

export default function* polylineSaga() {
  yield takeLatest(polylineActions.getPolylineFetch.type, fetchRoute);
}
