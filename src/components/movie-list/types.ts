import { category, movieType, tvType } from 'src/api/tmdbApi';

type TType = keyof typeof movieType | keyof typeof tvType;

export type TMovieList = { category: keyof typeof category } & (
  | { type: TType }
  | { type: 'similar'; id: string }
);
