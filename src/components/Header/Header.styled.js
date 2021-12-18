import styled from '@emotion/styled';

export const Background = styled.div`
  background-image: url('../../../images/homeBg.png');
  background-size: cover;
  padding: 10px 0;
`;

export const NavList = styled.nav`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  margin-bottom: 73px;
  padding: 0;
  font-size: 12px;
`;

export const Logo = styled.span`
  color: ${props => props.theme.colors.primaryText};
  font-size: 24px;
  font-weight: 500;
`;
