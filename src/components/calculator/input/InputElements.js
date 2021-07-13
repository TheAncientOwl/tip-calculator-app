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

  border-radius: 0.5em;
  padding: 0.5em;

  font-size: 1.5em;
  background: ${Colors.lightGrayCyan2};
  border: 0.1em solid ${Colors.lightGrayCyan2};

  :hover {
    border: 0.1em solid ${Colors.strongCyan};
  }
`;

export const Icon = styled.div`
  font-size: inherit;
  font-weight: bold;
  color: ${Colors.darkGrayCyan2};
`;

export const InputField = styled.input`
  width: 100%;

  border: none;
  outline: none;
  color: ${Colors.darkCyan};

  background: transparent;

  text-align: right;
  font-size: inherit;
  font-weight: bold;

  caret-color: ${Colors.strongCyan};

  ::placeholder {
    color: ${Colors.darkGrayCyan2};
    opacity: 0.7;
  }
`;
