import {
  applyMiddleware,
  CombinedState,
  createStore,
  Store,
  Reducer,
  AnyAction,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import { rootReducer, RootStateInstance } from "./reducer";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./rootSaga";

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

interface StoreInstance extends Store {
  sagaTask: Task;
}

const makeConfiguredStore = (
  reducer: Reducer<CombinedState<RootStateInstance>, AnyAction>,
  initialState = {}
): StoreInstance => {
  const { routerMiddleware } = createReduxHistoryContext({
    history: createBrowserHistory(),
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([sagaMiddleware, routerMiddleware])
  ) as StoreInstance;

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const makeStore = (initialState = {}): Store<unknown, AnyAction> =>
  makeConfiguredStore(rootReducer, initialState);

const store = makeConfiguredStore(rootReducer, {});

export type AppDispatch = typeof store.dispatch;

export default makeStore;
