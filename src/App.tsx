import * as React from 'react';

import { loggy } from 'services/loggy';
import Movies from 'services/movies';

import { Header } from 'components/header';
import { List } from 'components/list';

function App() {
  const [movies, setMovie] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    Movies.getMovies().then(setMovie);
  }, []);

  return (
    <>
      <Header />
      <p>
        Below is a (not) comprehensive list of movies that Even really likes.
      </p>
      <List items={movies.sort(alphaBy('title')).map<any>(toListItem)} />
    </>
  );
}

const toListItem = ({ id, title, url }: Movie) => ({ id, title, url });

const alphaBy = (prop: string) => (a: any, b: any) => {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
};

export default App;
