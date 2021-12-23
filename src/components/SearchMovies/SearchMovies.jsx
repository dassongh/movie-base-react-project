import TrendingMoviesListItem from '../TrendingMoviesList/TrendingMoviesListItem/TrendingMoviesListItem';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { FiSearch } from 'react-icons/fi';
import { fetchByName } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';
import { MovieList } from '../TrendingMoviesList/TrendingMoviesList.styled';
import { Form, Input, SearchBtn, Plug } from './SearchMovies.styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setPending(true);
      fetchByName(searchQuery)
        .then(response => {
          if (response.results.length === 0) toast.warn('Could not find movies with that name');

          setResult([...response.results]);
        })
        .finally(() => setPending(false));
    }
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

      {isPending && <Loader type="Puff" color="#C4C4C4" height={80} width={80} className="Loader" />}

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

      <ToastContainer autoClose={2000} />
    </>
  );
}
