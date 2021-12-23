import styled from '@emotion/styled';

export const Background = styled.div`
  background-image: url('../../../images/headerBg.jpg');
  background-size: cover;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    background-image: url('../../../images/headerBg2x.png');
  }
`;

export const NavList = styled.nav`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  margin-bottom: 75px;
  padding: 0;
  font-size: 12px;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    margin-bottom: 40px;
  }
`;

export const Logo = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;
