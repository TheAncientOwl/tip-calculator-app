import { Section, SectionTitle } from '../CommonElements';
import PropTypes from 'prop-types';
import IconSrc from '../../../images/icon-person.svg';
import { InvalidInputMessage, TitleContainer, Input2 } from './NumberOfPeopleInputElements';

export default function NumberOfPeopleInput({ invalid, value, onValueChange }) {
  return (
    <Section>
      <TitleContainer>
        <SectionTitle>Number of People</SectionTitle>
        <InvalidInputMessage invalid={invalid}>Can&apos;t be 0</InvalidInputMessage>
      </TitleContainer>
      <Input2
        invalid={invalid}
        icon={<img src={IconSrc} alt='person icon' />}
        value={value}
        onValueChange={onValueChange}
      />
    </Section>
  );
}

NumberOfPeopleInput.propTypes = {
  invalid: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
