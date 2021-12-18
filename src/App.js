import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/movies" />
        <Route path="/library" />
      </Routes>
    </>
  );
}

export default App;
