import styled from '@emotion/styled';

export const Text = styled.span`
  display: block;
  font-weight: 400;
  font-size: 18px;
  margin-top: 160px;
  margin-bottom: 240px;
  text-align: center;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (min-width: 1024px) {
    margin-top: 220px;
    margin-bottom: 280px;
  }
`;

export const BtnsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    justify-content: center;
  }
`;

export const BtnsItem = styled.li`
  @media screen and (min-width: 768px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;
