import styled from 'styled-components';
import Colors from '../../../Colors';

export const Container = styled.div`
  margin-top: 0.8em;
`;

export const Icon = styled.div``;

export const InputField = styled.input`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  background: ${Colors.lightGrayCyan2};
  color: ${Colors.darkCyan};
  text-align: right;

  width: 100%;
  font-size: 1.5em;

  font-weight: bold;
  border: 1px solid ${Colors.lightGrayCyan2};
  border-radius: 0.4em;
  padding: 0.5em;
  outline: none;

  ::placeholder {
    color: ${Colors.darkGrayCyan2};
    opacity: 0.7;
  }
`;
