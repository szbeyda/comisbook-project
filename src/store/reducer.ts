import { combineReducers } from "redux";
import { NewsModel } from "../components/NewsCard/data";
import NewsReducer from "./news/index";

interface RootStateInstance {
  newsLists: NewsModel[] | any;
  //newsLists: NewsModel[];
}

const appReducer = combineReducers<RootStateInstance>({
  newsLists: NewsReducer,
});

const initialState = appReducer(
  {
    newsLists: [],
  },
  {
    type: undefined,
  }
);
const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = initialState;
  }
  return appReducer(state, action);
};

export { rootReducer, type RootStateInstance };
