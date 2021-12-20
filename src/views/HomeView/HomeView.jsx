import Container from '../../components/Container/Container';
import TrendingMoviesList from '../../components/TrendingMoviesList/TrendingMoviesList';
import { Heading, MainSection } from './HomeView.styled';

export default function HomeView() {
  return (
    <Container>
      <MainSection>
        <Heading>Trending movies</Heading>
        <TrendingMoviesList />
      </MainSection>
    </Container>
  );
}
