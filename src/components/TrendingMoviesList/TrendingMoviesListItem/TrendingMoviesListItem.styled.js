import styled from '@emotion/styled';

export const ImgThumb = styled.div`
  width: 130px;
  height: 195px;
  border-radius: 5px;

  & > img {
    border-radius: 5px;
  }
`;

export const MovieTitle = styled.h2`
  width: 120px;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 0;
  font-size: 9px;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryText};
`;

export const MovieItem = styled.li`
  margin: 10px;
`;
