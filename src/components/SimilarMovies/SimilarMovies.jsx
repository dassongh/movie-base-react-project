import Loader from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSimilar } from '../../services/fetchMovies';
import SimilarMoviesItem from './SimilarMoviesItem/SimilarMoviesItem';
import { MovieList } from './SimilarMovies.styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function SimilarMovies({ movieId }) {
  const [movieList, setMovieList] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    fetchSimilar(movieId)
      .then(response => setMovieList([...response.results]))
      .finally(() => setPending(false));

    return () => setMovieList(null);
  }, [movieId]);

  return (
    <>
      {isPending && <Loader type="Puff" color="#C4C4C4" height={80} width={80} className="Loader" />}

      <MovieList>
        {movieList.map(({ original_title, id, release_date, poster_path }) => {
          return <SimilarMoviesItem key={id} id={id} title={original_title} date={release_date} poster={poster_path} />;
        })}
      </MovieList>
    </>
  );
}

SimilarMovies.propTypes = {
  movieId: PropTypes.string.isRequired,
};
