import PropTypes from 'prop-types';
import { CastList, CastItem, ImgThumb, CastTitle } from './MovieCast.styled';
import { useEffect, useState } from 'react';
import { fetchCredits } from '../../services/fetchMovies';

export default function MovieCast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCredits(movieId).then(response => setCast([...response.cast]));

    return () => {
      setCast(null);
    };
  }, [movieId]);

  return (
    <CastList>
      {cast &&
        cast.map(el => {
          return (
            <CastItem key={el.id}>
              <ImgThumb>
                <img
                  src={
                    el.profile_path
                      ? `https://www.themoviedb.org/t/p/w1280${el.profile_path}`
                      : 'http://dummyimage.com/160'
                  }
                  alt=""
                />
              </ImgThumb>
              <CastTitle>
                {el.original_name} | {el.character}
              </CastTitle>
            </CastItem>
          );
        })}
    </CastList>
  );
}

MovieCast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
