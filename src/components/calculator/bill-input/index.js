import { Title, Section } from '../CommonElements';
import Input from '../input';
import PropTypes from 'prop-types';

export default function BillInput({ value, onValueChange }) {
  return (
    <Section>
      <Title>Bill</Title>
      <Input icon='$' value={value} onValueChange={onValueChange} />
    </Section>
  );
}

BillInput.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
