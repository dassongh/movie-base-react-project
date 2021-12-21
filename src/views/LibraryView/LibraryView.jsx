import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import Container from '../../components/Container/Container';
import { useState } from 'react';
import { MainSection } from '../HomeView/HomeView.styled';
import { Text, BtnsList, BtnsItem } from './LibraryView.styled';

export default function LibraryView() {
  const [activeView, setActiveView] = useState('Watched');

  return (
    <MainSection>
      <Container>
        <BtnsList>
          <BtnsItem>
            <ToggleBtn
              isActive={activeView === 'Watched' ? true : false}
              value={'Watched'}
              onClick={() => setActiveView('Watched')}
              size="small"
            />
          </BtnsItem>
          <BtnsItem>
            <ToggleBtn
              isActive={activeView === 'Queue' ? true : false}
              value={'Queue'}
              onClick={() => setActiveView('Queue')}
              size="small"
            />
          </BtnsItem>
        </BtnsList>
        <Text>Empty</Text>
      </Container>
    </MainSection>
  );
}
