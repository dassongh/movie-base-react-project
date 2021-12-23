import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { CastList, CastItem, ImgThumb, CastTitle } from './MovieCast.styled';
import { useEffect, useState } from 'react';
import { fetchCredits } from '../../services/fetchMovies';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function MovieCast({ movieId }) {
  const [cast, setCast] = useState(null);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    fetchCredits(movieId)
      .then(response => setCast([...response.cast]))
      .finally(() => setPending(false));

    return () => {
      setCast(null);
    };
  }, [movieId]);

  return (
    <>
      {isPending && <Loader type="Puff" color="#C4C4C4" height={80} width={80} className="Loader" />}

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
                        : '../../../../images/dummyImage.jpg'
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
    </>
  );
}

MovieCast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
