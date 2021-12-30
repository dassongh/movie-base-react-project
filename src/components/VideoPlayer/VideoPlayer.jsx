import { useState, useEffect } from 'react';
import { Player, PlayerWrapper, Overlay } from './VideoPlayer.styled';
import { fetchVideos } from '../../services/fetchMovies';

export default function VideoPlayer({ movieId, onClick }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(movieId).then(response => setVideos(response.results));
  }, [movieId]);

  const trailer = videos.find(el => el.type === 'Trailer');

  return (
    <>
      {trailer && (
        <Overlay onClick={onClick}>
          <PlayerWrapper>
            <Player url={`www.youtube.com/watch?v=${trailer.key}`} controls={true} width="100%" height="100%" />
          </PlayerWrapper>
        </Overlay>
      )}
    </>
  );
}
