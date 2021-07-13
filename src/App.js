import styled from 'styled-components';
import Colors from './Colors';
import Calculator from './components/calculator';
import Title from './components/Title';

const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.lightGrayCyan1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Title />
      <Calculator />
    </Container>
  );
}
