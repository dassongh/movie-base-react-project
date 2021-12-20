import styled from '@emotion/styled';

export const Background = styled.div`
  background-image: url('../../../images/footerBg.jpg');
  background-size: cover;
  padding: 25px 0;
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors.secondaryText};

  & > a {
    color: ${props => props.theme.colors.secondaryText};
  }
`;
