import styled from 'styled-components';
import Colors from '../../Colors';
import BillInput from './bill-input';
import TipSelector from './tip-selector';
import NumberOfPeopleInput from './number-of-people-input';
import ResultsDisplay from './results-display';
import { useState } from 'react';
import Breakpoints from '../../Breakpoints';

const Container = styled.div`
  background: ${Colors.white};
  width: 54em;
  margin: 0 1em;
  padding: 2em 1em;
  border-radius: 2em;

  display: flex;

  @media (max-width: ${Breakpoints._950}) {
    font-size: 0.9em;
  }

  @media (max-width: ${Breakpoints._850}) {
    font-size: 0.8em;
  }

  @media (max-width: ${Breakpoints._750}) {
    font-size: 0.7em;
  }

  @media (max-width: ${Breakpoints._650}) {
    flex-direction: column;
    width: 80vw;
  }
`;

const Column = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  font-size: 1em;

  padding: 0 1em;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Separator = styled.div`
  min-height: 2.5em;
`;

const calculate = (bill, tip, people, setZeroFlag) => {
  const totalTip = (tip / 100) * bill;
  const total = bill + totalTip;

  const rounded = value => (Math.round(value * 100) / 100).toFixed(2);

  if (people != 0) {
    setZeroFlag(false);
    return { tip: rounded(totalTip / people), total: rounded(total / people) };
  } else {
    if (bill && tip) setZeroFlag(true);
    return { tip: '0.00', total: '0.00' };
  }
};

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeolple] = useState(0);

  const [person, setPerson] = useState({ tip: '0.00', total: '0.00' });
  const [zeroFlag, setZeroFlag] = useState(false);

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeolple(0);
  };

  const handleBillChange = newBill => {
    setBill(newBill);
    setPerson(calculate(newBill, tip, people, setZeroFlag));
  };

  const handleTipChange = newTip => {
    setTip(newTip);
    setPerson(calculate(bill, newTip, people, setZeroFlag));
  };

  const handlePeopleChange = newPeople => {
    setPeolple(newPeople);
    setPerson(calculate(bill, tip, newPeople, setZeroFlag));
  };

  return (
    <Container>
      <Column style={{ padding: '0.6em 1em' }}>
        <BillInput value={bill} onValueChange={handleBillChange} />
        <Separator />
        <TipSelector value={tip} onSelect={handleTipChange} />
        <Separator />
        <NumberOfPeopleInput invalid={zeroFlag} value={people} onValueChange={handlePeopleChange} />
      </Column>

      <Column>
        <ResultsDisplay total={person.total} tip={person.tip} onReset={handleReset} />
      </Column>
    </Container>
  );
}
