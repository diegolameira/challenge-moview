import * as React from 'react';

import { loggy } from 'services/loggy';
import Movies from 'services/movies';
import Reviews from 'services/reviews';

import { Header } from 'components/header';
import { List } from 'components/list';
import { Select } from 'components/select';

import styles from 'index.module.scss';

function App() {
  const [search, setSearch] = React.useState<string>('');
  const [decade, setDecade] = React.useState<number>();
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [decades, setDecades] = React.useState<string[]>([]);

  const handleInputChange = (value: string) => {
    setSearch(value);
  };

  const loadReview = (id: number) => {
    Reviews.getReviewByMovieId(id).then((review: Review) => {
      setReviews((reviews) => {
        return ~reviews.findIndex(
          ({ 'movie-id': movieId }: Review) => movieId === review['movie-id']
        )
          ? reviews
          : [...reviews, review];
      });
    });
  };

  React.useEffect(() => {
    Movies.getMovies().then((movies) => {
      setMovies(movies);
      setDecades(
        movies
          .map(({ year }) => `${year}`)
          // remove duplicates
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          })
      );
    });
  }, [Movies, setMovies, decade]);

  return (
    <div className={styles.container}>
      <Header />
      <p>
        Below is a (not) comprehensive list of movies that Even really likes.
      </p>
      <input
        className={styles.search}
        placeholder="Search by title"
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <Select
        options={['', ...decades]}
        onChange={(e) => {
          setDecade(e.target.value);
        }}
      />
      <List
        onOpen={({ id }: any) => {
          loadReview(id);
        }}
        items={movies
          .filter(({ year }) => !decade || year == decade)
          .filter((movie) => {
            if (search.length >= 2)
              return new RegExp(search, 'gi').test(movie.title);
            return true;
          })
          .sort(alphaBy('title'))
          .map((movie) => ({
            ...movie,
            review: reviews.find(
              ({ 'movie-id': movieId }) => movie.id === movieId
            )?.review,
          }))}
      />
    </div>
  );
}

const alphaBy = (prop: string) => (a: any, b: any) => {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
};

export default App;
