import { Container, Icon, InputField } from './InputElements';
import PropTypes from 'prop-types';

export default function Input({ icon, value, onValueChange, className }) {
  return (
    <Container className={className}>
      <Icon>{icon}</Icon>
      <InputField
        type='number'
        placeholder='0'
        value={value || ''}
        onChange={e => onValueChange(Number(e.target.value))}
      />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.any.isRequired,
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  className: PropTypes.any,
};
