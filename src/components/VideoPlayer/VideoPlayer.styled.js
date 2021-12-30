import styled from '@emotion/styled';
import ReactPlayer from 'react-player/youtube';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  @media screen and (min-width: 1024px) {
    padding: 260px;
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
