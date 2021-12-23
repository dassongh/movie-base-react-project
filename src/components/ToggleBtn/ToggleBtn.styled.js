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
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`;
