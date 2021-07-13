import styled from 'styled-components';
import Colors from '../../Colors';
import BillInput from './bill-input';
import TipSelector from './tip-selector';
import NumberOfPeopleInput from './number-of-people-input';
import ResultsDisplay from './results-display';
import { useState } from 'react';

const Container = styled.div`
  background: ${Colors.white};
  width: 60vw;
  padding: 2em 1em;
  border-radius: 0.6em;

  display: flex;
`;

const Column = styled.div`
  padding: 0 1em;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Separator = styled.div`
  min-height: 2.5em;
`;

const calculate = (bill, tip, people) => {
  const totalTip = (tip / 100) * bill;
  const total = bill + totalTip;

  const rounded = value => (Math.round(value * 100) / 100).toFixed(2);

  if (people != 0) return { tip: rounded(totalTip / people), total: rounded(total / people) };
  else return { tip: '0.00', total: '0.00' };
};

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeolple] = useState(0);

  const [person, setPerson] = useState({ tip: '0.00', total: '0.00' });
  person;

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeolple(0);
  };

  const handleBillChange = newBill => {
    setBill(newBill);
    setPerson(calculate(newBill, tip, people));
  };

  const handleTipChange = newTip => {
    setTip(newTip);
    setPerson(calculate(bill, newTip, people));
  };

  const handlePeopleChange = newPeople => {
    setPeolple(newPeople);
    setPerson(calculate(bill, tip, newPeople));
  };

  return (
    <Container>
      <Column style={{ padding: '0.6em 1em' }}>
        <BillInput value={bill} onValueChange={handleBillChange} />
        <Separator />
        <TipSelector value={tip} onSelect={handleTipChange} />
        <Separator />
        <NumberOfPeopleInput value={people} onValueChange={handlePeopleChange} />
      </Column>

      <Column>
        <ResultsDisplay total={person.total} tip={person.tip} onReset={handleReset} />
      </Column>
    </Container>
  );
}
