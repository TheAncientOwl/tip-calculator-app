import styled from 'styled-components';
import Colors from '../Colors';

const Container = styled.div`
  text-transform: uppercase;
  color: ${Colors.darkCyan};
  font-weight: bold;
  font-size: 2em;
  letter-spacing: 0.4em;
  margin-bottom: 2em;
`;

export default function Title() {
  return (
    <Container>
      spli
      <br />
      tter
    </Container>
  );
}
