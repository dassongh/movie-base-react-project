import Header from './components/Header/Header';
import HomeView from './views/HomeView/HomeView';
import MoviesView from './views/MoviesView/MoviesView';
import MovieDetalisView from './views/MovieDetailsView/MovieDetailsView';
import LibraryView from './views/LibraryView/LibraryView';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId" element={<MovieDetalisView />} />
        <Route path="/library" element={<LibraryView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
