declare interface Movie {
  id: number;
  title: string;
  year: number;
  score: number;
  director: string;
  url: string;
  synopsis: string;
  rating: string;
  'runtime-in-minutes': number;
  'oscar-nominations': number;
  oscars: number;
  'cover-url': string;
}

declare interface Review {
  'movie-id': number;
  review: string;
}
