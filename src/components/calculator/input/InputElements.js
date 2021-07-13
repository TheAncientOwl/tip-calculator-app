import styled from 'styled-components';
import Colors from '../../../Colors';

export const Container = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  overflow: hidden;

  margin-top: 0.35em;
  display: flex;
  align-items: center;
  gap: 0.3em;

  border-radius: 0.4em;
  padding: 0.5em;

  font-size: 1.5em;
  color: ${Colors.darkCyan};
  background: ${Colors.lightGrayCyan2};
`;

export const Icon = styled.div`
  font-size: inherit;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 100%;

  border: none;
  outline: none;
  color: inherit;
  background: transparent;

  text-align: right;
  font-size: inherit;
  font-weight: bold;

  ::placeholder {
    color: ${Colors.darkGrayCyan2};
    opacity: 0.7;
  }
`;
