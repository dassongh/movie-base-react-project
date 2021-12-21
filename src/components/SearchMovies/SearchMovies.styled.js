import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  margin-top: 5px;
  margin-bottom: 10px;
  max-width: 320px;
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
  background-color: #c4c4c4;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  color: ${props => props.theme.colors.primaryText};

  & :focus {
    background-color: white;
    border: 1px solid #c4c4c4;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  border: none;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: ${props => props.theme.colors.primaryText};
`;

export const Plug = styled.div`
  margin-top: 400px;
`;
