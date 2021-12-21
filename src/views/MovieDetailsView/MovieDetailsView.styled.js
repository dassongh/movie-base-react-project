import styled from '@emotion/styled';

export const Backdrop = styled.div`
  width: 100%;
  background: ${props =>
    `linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${props.background})`};
  background-position: 50% 50%;
  background-size: cover;
  padding: 20px 0 10px;
`;

export const Poster = styled.div`
  height: 210px;
  width: 140px;
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryText};
  text-transform: uppercase;
  margin-top: 5px;
  margin-bottom: 0;
  line-height: 1.6;
`;

export const Genres = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.58;
  color: ${props => props.theme.colors.primaryText};
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
`;

export const RaitingThumb = styled.div`
  height: 20px;
  background-color: ${props => props.theme.colors.secondary};
`;

export const Raiting = styled.p`
  margin: 0;
  padding: 2px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.58;
  color: ${props => props.theme.colors.additionalText};
`;

export const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Tagline = styled.h2`
  color: ${props => props.theme.colors.primaryText};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.57;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const Heading = styled.h3`
  color: ${props => props.theme.colors.primaryText};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.57;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const Overview = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.66;
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.colors.primaryText};
`;

export const NavigateBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  border: none;
  color: ${props => props.theme.colors.additionalText};
  height: 27px;
  width: 40px;
  margin-bottom: 160px;
  margin-left: auto;
  cursor: pointer;
`;

export const OpenBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primaryText};
  cursor: pointer;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 20px 0;
  justify-content: space-evenly;
`;
export const BtnsItem = styled.li``;
