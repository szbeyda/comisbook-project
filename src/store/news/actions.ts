import { createAction } from "redux-actions";
import { ActionsTypes } from "./types";

export const fetchNewslists = createAction(ActionsTypes.FETCH_NEWSLISTS);
export const fetchNewslistsSuccess = createAction(
  ActionsTypes.FETCH_NEWSLISTS_SUCCESS
);
export const fetchNewslistsFailed = createAction(
  ActionsTypes.FETCH_NEWSLISTS_FAILED
);

export const updateNewslists = createAction(ActionsTypes.UPDATE_NEWSLISTS);
export const updateNewslistsSuccess = createAction(
  ActionsTypes.UPDATE_NEWSLISTS_SUCCESS
);
export const updateNewslistsFailed = createAction(
  ActionsTypes.UPDATE_NEWSLISTS_FAILED
);
