import PropTypes from 'prop-types';
import { ImgThumb, MovieTitle, MovieItem } from './TrendingMoviesListItem.styled';
import { Link } from 'react-router-dom';

export default function TrendingMoviesListItem({ id, date, title, poster }) {
  return (
    <MovieItem>
      <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
        <ImgThumb>
          <img src={`https://www.themoviedb.org/t/p/w1280${poster}`} alt={title} />
        </ImgThumb>
        <MovieTitle>
          {title} |<span> {date.slice(0, 4)}</span>
        </MovieTitle>
      </Link>
    </MovieItem>
  );
}

TrendingMoviesListItem.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};
