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
  border-right: 1px solid black;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Separator = styled.div`
  min-height: 2.5em;
`;

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeolple] = useState(0);

  return (
    <Container>
      <Column>
        <BillInput value={bill} onValueChange={value => setBill(value)} />
        <Separator />
        <TipSelector value={tip} onSelect={value => setTip(value)} />
        <Separator />
        <NumberOfPeopleInput value={people} onValueChange={value => setPeolple(value)} />
      </Column>

      <Column>
        <ResultsDisplay bill={0} tip={0} people={1} />
      </Column>
    </Container>
  );
}
