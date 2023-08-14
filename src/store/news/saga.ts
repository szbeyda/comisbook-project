import { ActionsTypes } from "./types";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  fetchNewslistsSuccess,
  fetchNewslistsFailed,
  updateNewslistsSuccess,
  updateNewslistsFailed,
} from "./actions";
import { newsLists } from "../../components/NewsCard/data";
// import ApiService from "./ApiService";

function* fetchNewslistsSaga() {
  //* yield operator is used to pause and resume
  try {
    const response = newsLists; //çağrı atadık
    //redux store a eylem gidecek
    console.log(response);
    yield put(fetchNewslistsSuccess(response));
  } catch (error) {
    yield put(fetchNewslistsFailed(error));
  }
}
const newsSagas = [
  takeEvery(ActionsTypes.FETCH_NEWSLISTS, fetchNewslistsSaga),
  // takeEvery(ActionsTypes.UPDATE_NEWSLISTS, updateNewslistsSaga),
];
export default newsSagas;
