import styled from '@emotion/styled';

export const Text = styled.span`
  display: block;
  font-weight: 400;
  font-size: 18px;
  margin-top: 160px;
  margin-bottom: 240px;
  text-align: center;
  color: ${props => props.theme.colors.primaryText};
`;

export const BtnsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 0;
`;

export const BtnsItem = styled.li``;
