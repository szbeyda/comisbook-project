import { NewsModel } from "../../components/NewsCard/data";
import { RootStateInstance } from "../reducer";

export const fetchNewslists = (state: RootStateInstance): NewsModel[] =>
  state.newsLists;
