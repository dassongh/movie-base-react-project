import Container from '../Container/Container';
import { Background, NavList, Logo } from './Header.styled';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Background>
      <Container>
        <NavList>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
            Movies
          </NavLink>
          <NavLink to="/library" className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>
            My library
          </NavLink>
        </NavList>
        <Logo>Movie base</Logo>
      </Container>
    </Background>
  );
}
