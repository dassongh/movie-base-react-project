import Container from '../../components/Container/Container';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import { Heading, MainSection } from '../HomeView/HomeView.styled';

export default function MoviesView() {
  return (
    <Container>
      <MainSection>
        <Heading>Search movies</Heading>
        <SearchMovies />
      </MainSection>
    </Container>
  );
}
