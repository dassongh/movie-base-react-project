import Container from '../../components/Container/Container';
import MovieCast from '../../components/MovieCast/MovieCast';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
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
} from './MovieDetailsView.styled';

export default function MovieDetalisView() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState(false);
  const [similarMovies, setSimilarMovies] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {

  // });

  useEffect(() => {
    fetchById(movieId).then(response => setMovieDetails(response));

    return () => {
      setMovieCast(false);
      setSimilarMovies(false);
    };
  }, [movieId]);

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

            <Wrapper>
              <button>Add to watched</button>
              <button>Add to queue</button>
            </Wrapper>

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
