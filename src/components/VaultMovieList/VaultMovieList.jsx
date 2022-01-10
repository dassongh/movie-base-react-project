import TrendingMoviesListItem from '../TrendingMoviesList/TrendingMoviesListItem/TrendingMoviesListItem';
import { useState, useEffect } from 'react';
import { MovieList } from '../TrendingMoviesList/TrendingMoviesList.styled';
import { Text } from '../../views/LibraryView/LibraryView.styled';

export default function VaultMovieList({ from }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const vaultMoviesIds = localStorage.getItem('movieVault');
    const queueMoviesIds = localStorage.getItem('movieQueue');

    if (vaultMoviesIds && from === 'Watched') setMovieList(JSON.parse(vaultMoviesIds));
    if (queueMoviesIds && from === 'Queue') setMovieList(JSON.parse(queueMoviesIds));
  }, [from]);

  return (
    <>
      <MovieList>
        {movieList.length > 0 &&
          movieList.map(({ original_title, id, release_date, poster_path }) => {
            return (
              <TrendingMoviesListItem
                key={id}
                id={id}
                title={original_title}
                date={release_date}
                poster={poster_path}
              />
            );
          })}
      </MovieList>

      {movieList.length === 0 && <Text>Empty</Text>}
    </>
  );
}
