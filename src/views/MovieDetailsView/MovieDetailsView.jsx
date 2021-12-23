import Container from '../../components/Container/Container';
import MovieCast from '../../components/MovieCast/MovieCast';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi';
import { fetchById } from '../../services/fetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Backdrop,
  Poster,
  Title,
  Genres,
  RaitingThumb,
  Raiting,
  Heading,
  Overview,
  Tagline,
  NavigateBtn,
  Wrapper,
  OpenBtn,
  FlexWrapper,
  BtnsList,
  BtnsItem,
} from './MovieDetailsView.styled';

export default function MovieDetalisView() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState(false);
  const [similarMovies, setSimilarMovies] = useState(false);
  const [movieVault, setMovieVault] = useState(false);
  const [movieQueue, setMovieQueue] = useState(false);
  const navigate = useNavigate();

  const savedMovies = JSON.parse(window.localStorage.getItem('movieVault'));
  const queueMovies = JSON.parse(window.localStorage.getItem('movieQueue'));

  useEffect(() => {
    fetchById(movieId).then(response => setMovieDetails(response));

    return () => {
      setMovieCast(false);
      setSimilarMovies(false);
      setMovieVault(false);
      setMovieQueue(false);
    };
  }, [movieId]);

  useEffect(() => {
    if (savedMovies && savedMovies.find(el => el.id === Number(movieId))) setMovieVault(true);
    if (queueMovies && queueMovies.find(el => el.id === Number(movieId))) setMovieQueue(true);
  }, [movieId, savedMovies, queueMovies]);

  const watchedBtnHandler = () => {
    if (!movieVault) {
      setMovieVault(true);
      if (savedMovies && !savedMovies.includes(movieId)) {
        window.localStorage.setItem(
          'movieVault',
          JSON.stringify([
            ...savedMovies,
            {
              original_title: movieDetails.original_title,
              id: movieDetails.id,
              release_date: movieDetails.release_date,
              poster_path: movieDetails.poster_path,
            },
          ]),
        );
      } else if (!savedMovies) {
        window.localStorage.setItem(
          'movieVault',
          JSON.stringify([
            {
              original_title: movieDetails.original_title,
              id: movieDetails.id,
              release_date: movieDetails.release_date,
              poster_path: movieDetails.poster_path,
            },
          ]),
        );
      }
    }

    if (movieVault) {
      setMovieVault(false);
      const refreshedVault = savedMovies.filter(el => el.id !== Number(movieId));
      window.localStorage.setItem('movieVault', JSON.stringify([...refreshedVault]));
    }
  };

  const queueBtnHandler = () => {
    if (!movieQueue) {
      setMovieQueue(true);
      if (queueMovies && !queueMovies.includes(movieId)) {
        window.localStorage.setItem(
          'movieQueue',
          JSON.stringify([
            ...queueMovies,
            {
              original_title: movieDetails.original_title,
              id: movieDetails.id,
              release_date: movieDetails.release_date,
              poster_path: movieDetails.poster_path,
            },
          ]),
        );
      } else if (!queueMovies) {
        window.localStorage.setItem(
          'movieQueue',
          JSON.stringify([
            {
              original_title: movieDetails.original_title,
              id: movieDetails.id,
              release_date: movieDetails.release_date,
              poster_path: movieDetails.poster_path,
            },
          ]),
        );
      }
    }

    if (movieQueue) {
      setMovieQueue(false);
      const refreshedQueue = queueMovies.filter(el => el.id !== Number(movieId));
      window.localStorage.setItem('movieQueue', JSON.stringify([...refreshedQueue]));
    }
  };

  return (
    <main>
      {movieDetails && (
        <>
          <Backdrop
            background={
              movieDetails.backdrop_path
                ? `https://www.themoviedb.org/t/p/w1280${movieDetails.backdrop_path}`
                : `https://www.themoviedb.org/t/p/w1280${movieDetails.poster_path}`
            }
          >
            <Container>
              <div>
                <NavigateBtn type="button" onClick={() => navigate(-1)}>
                  <FiArrowLeft />
                </NavigateBtn>
                <Poster>
                  <img
                    src={`https://www.themoviedb.org/t/p/w1280${movieDetails.poster_path}`}
                    alt={movieDetails.original_title}
                  />
                </Poster>
                <Title>
                  {movieDetails.original_title}, {movieDetails.release_date.slice(0, 4)}
                </Title>
                <Genres>
                  {movieDetails.genres.map((el, indx, arr) => {
                    if (indx === arr.length - 1) return el.name;
                    return `${el.name}, `;
                  })}
                </Genres>
              </div>
            </Container>
          </Backdrop>

          <RaitingThumb>
            <Container>
              <Raiting>{movieDetails.vote_average} TMBd</Raiting>
            </Container>
          </RaitingThumb>

          <Container>
            <Wrapper>
              <Tagline>{movieDetails.tagline}</Tagline>
              <Heading>Overview</Heading>
              <Overview>{movieDetails.overview}</Overview>
            </Wrapper>

            <BtnsList>
              <BtnsItem>
                <ToggleBtn
                  value={movieVault ? 'Remove from watched' : 'Add to watched'}
                  size={'big'}
                  isActive={movieVault ? true : false}
                  onClick={watchedBtnHandler}
                />
              </BtnsItem>
              <BtnsItem>
                <ToggleBtn
                  value={movieQueue ? 'Remove from queue' : 'Add to queue'}
                  size={'big'}
                  isActive={movieQueue ? true : false}
                  onClick={queueBtnHandler}
                />
              </BtnsItem>
            </BtnsList>

            <Wrapper>
              <FlexWrapper>
                <Heading>Cast</Heading>
                <OpenBtn onClick={() => setMovieCast(prevState => !prevState)}>
                  {movieCast ? <FiX style={{ fontSize: '24px' }} /> : <FiPlus style={{ fontSize: '24px' }} />}
                </OpenBtn>
              </FlexWrapper>
              {movieCast && <MovieCast movieId={movieId} />}
            </Wrapper>

            <Wrapper>
              <FlexWrapper>
                <Heading>Similar movies</Heading>
                <OpenBtn onClick={() => setSimilarMovies(prevState => !prevState)}>
                  {similarMovies ? <FiX style={{ fontSize: '24px' }} /> : <FiPlus style={{ fontSize: '24px' }} />}
                </OpenBtn>
              </FlexWrapper>
              {similarMovies && <SimilarMovies movieId={movieId} />}
            </Wrapper>
          </Container>
        </>
      )}
    </main>
  );
}

//  useEffect(() => {
//    if (savedMovies && savedMovies.includes(movieId)) setMovieVault(true);
//  }, []);

//  useEffect(() => {
//  if (movieVault) {
//    if (savedMovies && !savedMovies.includes(movieId)) {
//      window.localStorage.setItem(
//        'movieVault',
//        JSON.stringify([
//          ...savedMovies,
//          {
//            original_title: movieDetails.original_title,
//            id: movieDetails.id,
//            release_date: movieDetails.release_date,
//            poster_path: movieDetails.poster_path,
//          },
//        ]),
//      );
//    } else if (!savedMovies) {
//      window.localStorage.setItem(
//        'movieVault',
//        JSON.stringify([
//          {
//            original_title: movieDetails.original_title,
//            id: movieDetails.id,
//            release_date: movieDetails.release_date,
//            poster_path: movieDetails.poster_path,
//          },
//        ]),
//      );
//    }
//    }

//  if (!movieVault && savedMovies) {
//    const refreshedVault = savedMovies.filter(el => el !== movieId);
//    window.localStorage.setItem('movieVault', JSON.stringify([...refreshedVault]));
//  }
//  }, [movieVault, movieId, savedMovies]);

//  useEffect(() => {
//    if (queueMovies && queueMovies.includes(movieId)) setMovieVault(true);
//  }, []);

//  useEffect(() => {
//    if (movieQueue) {
//      if (queueMovies && !queueMovies.includes(movieId)) {
//        window.localStorage.setItem(
//          'movieQueue',
//          JSON.stringify([
//            ...queueMovies,
//            {
//              original_title: movieDetails.original_title,
//              id: movieDetails.id,
//              release_date: movieDetails.release_date,
//              poster_path: movieDetails.poster_path,
//            },
//          ]),
//        );
//      } else if (!queueMovies) {
//        window.localStorage.setItem(
//          'movieQueue',
//          JSON.stringify([
//            {
//              original_title: movieDetails.original_title,
//              id: movieDetails.id,
//              release_date: movieDetails.release_date,
//              poster_path: movieDetails.poster_path,
//            },
//          ]),
//        );
//      }
//    }

//    if (!movieQueue && queueMovies) {
//      const refreshedQueue = queueMovies.filter(el => el !== movieId);
//      window.localStorage.setItem('movieQueue', JSON.stringify([...refreshedQueue]));
//    }
//  }, [movieQueue, movieId, queueMovies]);
