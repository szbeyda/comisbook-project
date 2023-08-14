import {
  all,
  AllEffect,
  CallEffect,
  ForkEffect,
  RaceEffect,
  TakeEffect,
} from "redux-saga/effects";
import newsSagas from "./news/saga";
// import userSagas from "@store/user/saga";
// import authSagas from "@store/auth/saga";
// import organizationSagas from "@store/organization/saga";
// import backupSagas from "@store/backup/saga";
// import mappingSagas from "./mapping/saga";
// import settingsSagas from "./settings/saga";
// import transformationSagas from "./transformation/saga";
// import showcaseSagas from "./showcase/saga";
// import notificationSagas from "./notification/saga";

type Effect = AllEffect<
  | ForkEffect<never>
  | Generator<
      TakeEffect | RaceEffect<TakeEffect | CallEffect<void>>,
      void,
      unknown
    >
>;

export default function* rootSaga(): Generator<Effect, void, undefined> {
  yield all([
    // ...userSagas,
    // ...authSagas,
    // ...organizationSagas,
    // ...backupSagas,
    // ...mappingSagas,
    // ...settingsSagas,
    // ...transformationSagas,
    // ...showcaseSagas,
    // ...notificationSagas,
    ...newsSagas,
  ]);
}
