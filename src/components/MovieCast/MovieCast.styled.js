import styled from '@emotion/styled';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: -10px;
  margin-top: 10px;
`;

export const CastItem = styled.li`
  margin: 10px;
`;

export const ImgThumb = styled.div`
  width: 130px;
  height: 195px;
  border-radius: 5px;

  & > img {
    border-radius: 5px;
  }
`;

export const CastTitle = styled.p`
  width: 120px;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 0;
  font-size: 9px;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryText};
`;
