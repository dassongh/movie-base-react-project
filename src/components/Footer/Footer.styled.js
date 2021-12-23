import styled from '@emotion/styled';

export const Background = styled.div`
  background-image: url('../../../images/footerBg.jpg');
  background-size: cover;
  padding: 25px 0;

  @media screen and (min-width: 768px) {
    background-image: url('../../../images/footerBg2x.png');
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors.secondaryText};

  & > a {
    color: ${props => props.theme.colors.secondaryText};
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;
