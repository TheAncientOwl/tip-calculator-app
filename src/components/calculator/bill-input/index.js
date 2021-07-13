import { Title } from '../CommonElements';
import { Container } from './BillInputElements';
import Input from '../input';

export default function BillInput() {
  return (
    <Container>
      <Title>Bill</Title>
      <Input placeholder='0' />
    </Container>
  );
}
