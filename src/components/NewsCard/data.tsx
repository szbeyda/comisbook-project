import { idText } from "typescript";

export interface NewsModel {
  id: number;
  category: string;
  description: string;
  date: Date;
  author?: string;
  title: string;
}

export const newsLists: NewsModel[] = [
  {
    id: 1,
    category: "Drama",
    title: "MARVEL ANNOUNCES A NEW THOR MOVIE",
    description:
      "Kevin Feige announces a new Thor movie after the success of Thor Love and Thunder last October.",
    date: new Date(),
  },
  {
    id: 2,
    category: "Comedy",
    title: "Marvel's Spider-Man 2 facing delay .. countries",
    description:
      "There’s no doubt that Marvel's Spider-Man 2 is one of this year’s most exciting video games 2",
    date: new Date(),
  },
  {
    id: 3,
    category: "Drama",
    title: "MARVEL ANNOUNCES A NEW THOR MOVIE",
    description:
      "Kevin Feige announces a new Thor movie after the success of Thor Love and Thunder last October.",
    date: new Date(),
  },
  {
    id: 4,
    category: "Drama",
    title: "Spider-Man swings into the watch world",
    description:
      "Sony and Marvel may have confirmed Spider-Man 4 is most definitely on the cards.",
    date: new Date(),
  },
];

export interface BooksModel {
  id: number;
  BookImg: any;
  BookSet: any;
  BookFav: any;
}
export const upcomingLists: BooksModel[] = [
  {
    id: 1,
    BookImg: "",
    BookFav: "",
    BookSet: "",
  },
  {
    id: 2,
    BookImg: "",
    BookFav: "",
    BookSet: "",
  },
  {
    id: 2,
    BookImg: "",
    BookFav: "",
    BookSet: "",
  },
];

export interface DegreeModel {
  id: number;
  title: string;
}
export const degreeList: DegreeModel[] = [
  {
    id: 1,
    title: "masterworks",
  },
  {
    id: 2,
    title: "Remasterworks",
  },
  {
    id: 3,
    title: "Single",
  },
];
