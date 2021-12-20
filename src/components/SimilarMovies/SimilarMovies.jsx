import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSimilar } from '../../services/fetchMovies';
import SimilarMoviesItem from './SimilarMoviesItem/SimilarMoviesItem';
import { MovieList } from './SimilarMovies.styled';

export default function SimilarMovies({ movieId }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchSimilar(movieId).then(response => setMovieList([...response.results]));

    return () => setMovieList(null);
  }, [movieId]);

  return (
    <MovieList>
      {movieList.map(({ original_title, id, release_date, poster_path }) => {
        return <SimilarMoviesItem key={id} id={id} title={original_title} date={release_date} poster={poster_path} />;
      })}
    </MovieList>
  );
}

SimilarMovies.propTypes = {
  movieId: PropTypes.string.isRequired,
};
