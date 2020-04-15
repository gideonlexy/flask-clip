import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchNews() {
  try {
    const res = yield axios.get('https://jsonplaceholder.typicode.com/users');
    yield put({ type: 'NEWS_RECIEVED', payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}

function* rootSaga() {
  yield all([actionWatcher()]);
}
export default rootSaga;
