import styled from '@emotion/styled';

export const ImgThumb = styled.div`
  width: 130px;
  height: 195px;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & > img {
    border-radius: 5px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & :hover,
  & :focus {
    transform: scale(102%);
  }

  @media screen and (min-width: 1024px) {
    width: 274px;
    height: 398px;
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

  @media screen and (min-width: 1024px) {
    width: 254px;
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const MovieItem = styled.li`
  margin: 10px;

  @media screen and (min-width: 1024px) {
    margin: 15px;
  }
`;
