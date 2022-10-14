import { category, movieType, tvType } from 'src/api/tmdbApi';

type TType = movieType | tvType;

export type TMovieList = { category: category } & (
  | { type: TType }
  | { type: 'similar'; id: string }
);
