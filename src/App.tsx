import * as React from 'react';

import { loggy } from 'services/loggy';
import Movies from 'services/movies';

import { Header } from 'components/header';
import { List } from 'components/list';

function App() {
  const [search, setSearch] = React.useState<string>('');
  const [movies, setMovie] = React.useState<Movie[]>([]);

  const handleInputChange = (value: string) => {
    setSearch(value);
  };

  React.useEffect(() => {
    Movies.getMovies().then(setMovie);
  }, []);

  return (
    <>
      <Header />
      <p>
        Below is a (not) comprehensive list of movies that Even really likes.
      </p>
      <input
        placeholder="Search by title"
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <List
        items={movies
          .filter((movie) => {
            if (search.length >= 2)
              return new RegExp(search, 'gi').test(movie.title);
            return true;
          })
          .sort(alphaBy('title'))}
      />
    </>
  );
}

const alphaBy = (prop: string) => (a: any, b: any) => {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
};

export default App;
