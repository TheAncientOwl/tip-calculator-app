import styled from 'styled-components';
import Colors from '../../../Colors';

export const Container = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  flex-grow: 1;
  width: 100%;
  border-radius: 0.5em;
  background: ${Colors.darkCyan};
  padding: 3em 2em 2em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;
`;

export const Title = styled.div`
  color: ${Colors.white};
  font-weight: bold;
  font-size: 1.15em;
  margin-bottom: 0.25em;
`;

export const Subtitle = styled.div`
  color: ${Colors.darkGrayCyan2};
  font-size: 1.05em;
`;

export const Value = styled.div`
  color: ${Colors.strongCyan};
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 2.5em;
`;

export const Button = styled.div`
  color: ${Colors.darkCyan};
  background: ${Colors.strongCyan};
  border-radius: 0.5em;
  text-align: center;
  padding: 0.75em 1em;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.15em;

  cursor: pointer;
`;
