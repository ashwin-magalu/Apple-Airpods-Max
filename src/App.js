import styled from 'styled-components';
import './App.css';
import { AirpodsCard } from './components/airpodsCard';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <AirpodsCard />
    </AppContainer>
  );
}

export default App;
