import { Action } from "redux-actions";
import { NewsModel } from "../../components/NewsCard/data";
import { ActionsTypes } from "./types";
import { handleActions } from "redux-actions";

// import { ErrorBE } from "@utils/types";

export interface NewsState {
  loading: boolean;
  // errors: ErrorBE | any;
  news: NewsModel[];
  newsLists: NewsModel[] | any;
}
export const initialState: NewsState = {
  loading: false,
  //   errors: {},
  news: [],
  newsLists: [],
};
const NewsReducer = {
  [ActionsTypes.FETCH_NEWSLISTS_SUCCESS]: (
    state: NewsState,
    { payload }: Action<typeof state.news>
  ): NewsState => ({
    ...state,
    loading: false,
    // errors: {},
    newsLists: payload,
  }),
  [ActionsTypes.FETCH_NEWSLISTS_FAILED]: (
    state: NewsState
    //{ payload }: Action<typeof state.errors>
  ): NewsState => ({
    ...state,
    loading: false,
    // errors: { ...payload },
  }),
};
export default handleActions(NewsReducer, initialState);
