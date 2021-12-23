import TrendingMoviesListItem from './TrendingMoviesListItem/TrendingMoviesListItem';
import Loader from 'react-loader-spinner';
import { MovieList } from './TrendingMoviesList.styled';
import { fetchTrending } from '../../services/fetchMovies';
import { useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function TrendingMoviesList() {
  const [movieList, setMovieList] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    fetchTrending()
      .then(response => setMovieList([...response.results]))
      .finally(() => setPending(false));
  }, []);

  return (
    <>
      {isPending && <Loader type="Puff" color="#C4C4C4" height={80} width={80} className="Loader" />}

      <MovieList>
        {movieList.map(({ original_title, id, release_date, poster_path }) => {
          return (
            <TrendingMoviesListItem key={id} id={id} title={original_title} date={release_date} poster={poster_path} />
          );
        })}
      </MovieList>
    </>
  );
}
