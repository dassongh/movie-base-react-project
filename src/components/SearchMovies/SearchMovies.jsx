import TrendingMoviesListItem from '../TrendingMoviesList/TrendingMoviesListItem/TrendingMoviesListItem';
import { FiSearch } from 'react-icons/fi';
import { fetchByName } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';
import { MovieList } from '../TrendingMoviesList/TrendingMoviesList.styled';
import { Form, Input, SearchBtn, Plug } from './SearchMovies.styled';

export default function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (searchQuery) fetchByName(searchQuery).then(response => setResult([...response.results]));
  }, [searchQuery]);

  const formHandler = e => {
    e.preventDefault();

    setSearchQuery(e.target[0].value);

    e.target.reset();
  };

  return (
    <>
      <Form onSubmit={formHandler}>
        <Input type="text" />
        <SearchBtn type="submit">
          <FiSearch />
        </SearchBtn>
      </Form>
      <MovieList>
        {result ? (
          result.map(({ original_title, id, release_date, poster_path }) => {
            return (
              <TrendingMoviesListItem
                key={id}
                id={id}
                title={original_title}
                date={release_date}
                poster={poster_path}
              />
            );
          })
        ) : (
          <Plug></Plug>
        )}
      </MovieList>
    </>
  );
}
