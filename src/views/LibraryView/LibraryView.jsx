import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import Container from '../../components/Container/Container';
import VaultMovieList from '../../components/VaultMovieList/VaultMovieList';
import { useState } from 'react';
import { MainSection } from '../HomeView/HomeView.styled';
import { Text, BtnsList, BtnsItem } from './LibraryView.styled';

export default function LibraryView() {
  const [activeView, setActiveView] = useState('Watched');

  const WATCHED = 'Watched';
  const QUEUE = 'Queue';
  const SMALL = 'small';

  const btns = [
    { value: WATCHED, size: SMALL },
    { value: QUEUE, size: SMALL },
  ];

  return (
    <MainSection>
      <Container>
        <BtnsList>
          {btns.map(({ value, size }) => (
            <BtnsItem>
              <ToggleBtn
                isActive={activeView === value ? true : false}
                value={value}
                onClick={() => setActiveView(value)}
                size={size}
              />
            </BtnsItem>
          ))}
        </BtnsList>

        <VaultMovieList from={activeView === WATCHED ? WATCHED : QUEUE} />
      </Container>
    </MainSection>
  );
}
