import TrendingMoviesListItem from './TrendingMoviesListItem/TrendingMoviesListItem';
import { MovieList } from './TrendingMoviesList.styled';
import { fetchTrending } from '../../services/fetchMovies';
import { useEffect, useState } from 'react';

export default function TrendingMoviesList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTrending().then(response => setMovieList([...response.results]));
  }, []);

  return (
    <MovieList>
      {movieList.map(({ original_title, id, release_date, poster_path }) => {
        return (
          <TrendingMoviesListItem key={id} id={id} title={original_title} date={release_date} poster={poster_path} />
        );
      })}
    </MovieList>
  );
}
