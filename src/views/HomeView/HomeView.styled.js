import styled from '@emotion/styled';

export const Heading = styled.h1`
  color: ${props => props.theme.colors.secondaryText};
  font-weight: 500;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const MainSection = styled.main`
  margin-top: 20px;
  margin-bottom: 30px;

  @media screen and (min-width: 1024px) {
    margin-top: 30px;
  }
`;
