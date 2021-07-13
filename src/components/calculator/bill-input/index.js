import { Title } from '../CommonElements';
import { Container } from './BillInputElements';
import Input from '../input';
import PropTypes from 'prop-types';

export default function BillInput({ value, onValueChange }) {
  return (
    <Container>
      <Title>Bill</Title>
      <Input icon='$' value={value} onValueChange={onValueChange} />
    </Container>
  );
}

BillInput.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
