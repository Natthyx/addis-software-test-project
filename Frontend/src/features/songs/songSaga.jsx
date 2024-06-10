import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  getSongsSuccess,
  deleteSongsSuccess,
  addSongsSuccess,
  patchSongsSuccess,
  getSongsFailure,
  deleteSongsFailure,
  addSongsFailure,
  patchSongsFailure,
} from "./songSlice";

const BASE_URL = "http://localhost:3001/songs";

function* workGetSongsFetch() {
  try {
    const data = yield call(() => axios.get(BASE_URL));
    yield put(getSongsSuccess(data.data));
  } catch (err) {
    yield put(getSongsFailure());
    console.error(err);
  }
}

function* workDeleteSongs(action) {
  try {
    yield call(() => axios.delete(`${BASE_URL}/${action.payload}`));
    yield put(deleteSongsSuccess(action.payload));
  } catch (err) {
    yield put(deleteSongsFailure());
    console.error(err);
  }
}

function* workAddSong(action) {
  try {
    const response = yield call(() => axios.post(BASE_URL, action.payload));
    yield put(addSongsSuccess(response.data));
  } catch (err) {
    yield put(addSongsFailure());
    console.error(err);
  }
}

function* workPatchSong(action) {
  try {
    const response = yield call(() => axios.put(`${BASE_URL}/${action.payload.id}`, action.payload));
    yield put(patchSongsSuccess(response.data));
  } catch (err) {
    yield put(patchSongsFailure());
    console.error(err);
  }
}

function* songSaga() {
  yield takeEvery("songs/getSongsFetch", workGetSongsFetch);
  yield takeEvery("songs/deleteSongsCall", workDeleteSongs);
  yield takeEvery("songs/addSongsCall", workAddSong);
  yield takeEvery("songs/patchSongsCall", workPatchSong);
}

export default songSaga;
