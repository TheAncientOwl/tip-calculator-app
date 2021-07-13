import { Container, Section, Title, Subtitle, Value, Button } from './ResultDisplayElements';
import PropTypes from 'prop-types';

export default function ResultsDisplay({ total, tip, onReset }) {
  total, tip, onReset;

  return (
    <Container>
      <div>
        <Section>
          <div>
            <Title>Tip Amount</Title>
            <Subtitle>/ person</Subtitle>
          </div>
          <Value>${tip}</Value>
        </Section>

        <Section>
          <div>
            <Title>Total</Title>
            <Subtitle>/ person</Subtitle>
          </div>
          <Value>${total}</Value>
        </Section>
      </div>

      <Button onClick={onReset}>reset</Button>
    </Container>
  );
}

ResultsDisplay.propTypes = {
  total: PropTypes.string.isRequired,
  tip: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
