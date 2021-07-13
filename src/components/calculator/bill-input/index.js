import { SectionTitle, Section } from '../CommonElements';
import Input from '../input';
import PropTypes from 'prop-types';
import IconSrc from '../../../images/icon-dollar.svg';

export default function BillInput({ value, onValueChange }) {
  return (
    <Section>
      <SectionTitle>Bill</SectionTitle>
      <Input icon={<img src={IconSrc} alt='$' />} value={value} onValueChange={onValueChange} />
    </Section>
  );
}

BillInput.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
