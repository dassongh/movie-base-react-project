import styled from '@emotion/styled';

export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  width: ${props => {
    switch (props.size) {
      case 'small':
        return '100px';
      case 'big':
        return '130px';
      default:
        return '100px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small':
        return '25px';
      case 'big':
        return '40px';
      default:
        return '25px';
    }
  }};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => (props.isactive ? '#626262' : '#EAEAEA')};
  color: ${props => (props.isactive ? props.theme.colors.additionalText : props.theme.colors.secondaryText)};
`;
