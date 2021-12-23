import styled from '@emotion/styled';

export const MovieList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: -10px;

  @media screen and (min-width: 768px) {
    margin: 5px;
  }

  @media screen and (min-width: 1024px) {
    margin: -15px;
  }
`;
