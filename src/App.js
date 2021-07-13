import styled from 'styled-components';
import Colors from './Colors';
import Calculator from './components/calculator';
import Logo from './components/Logo';
import Breakpoints from './Breakpoints';

const Container = styled.div`
  min-height: 100vh;
  background: ${Colors.lightGrayCyan1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${Breakpoints._750}) {
    padding: 2em 1em;
  }
`;

export default function App() {
  return (
    <Container>
      <Logo />
      <Calculator />
    </Container>
  );
}
