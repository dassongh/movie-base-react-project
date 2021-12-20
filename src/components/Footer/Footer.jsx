import Container from '../Container/Container';
import { Background, FooterText } from './Footer.styled';

export default function Footer() {
  return (
    <Background>
      <Container>
        <footer>
          <FooterText>
            © 2021 | All Rights Reserved | Developed by
            <a href="https://www.linkedin.com/in/alexander-salnykov/"> Alexander Salnykov</a>
          </FooterText>
        </footer>
      </Container>
    </Background>
  );
}
