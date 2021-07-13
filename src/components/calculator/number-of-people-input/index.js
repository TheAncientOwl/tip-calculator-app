import { Section, SectionTitle } from '../CommonElements';
import Input from '../input';
import PropTypes from 'prop-types';
import IconSrc from '../../../images/icon-person.svg';

export default function NumberOfPeopleInput({ value, onValueChange }) {
  return (
    <Section>
      <SectionTitle>Number of People</SectionTitle>
      <Input icon={<img src={IconSrc} alt='person icon' />} value={value} onValueChange={onValueChange} />
    </Section>
  );
}

NumberOfPeopleInput.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
