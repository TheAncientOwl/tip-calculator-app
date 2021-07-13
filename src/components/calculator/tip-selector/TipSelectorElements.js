import styled, { css } from 'styled-components';
import Colors from '../../../Colors';
import Input from '../input/index';

export const Container = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  margin-top: 1em;
  gap: 1em;
`;

export const GridItem = styled.div(
  ({ selected }) => css`
    font-size: 1.7em;
    text-align: center;
    color: ${selected ? Colors.darkCyan : Colors.white};
    background: ${selected ? Colors.darkGrayCyan2 : Colors.darkCyan};
    padding: 0.4em 0.3em;
    border-radius: 0.3em;
    font-weight: bold;
  `
);

export const CustomGridItem = styled(GridItem)(
  ({ selected }) => css`
    text-transform: capitalize;
    color: ${selected ? Colors.darkCyan : Colors.darkGrayCyan1};
    background: ${selected ? Colors.darkGrayCyan2 : Colors.lightGrayCyan2};
  `
);

export const CustomTipInput = styled(Input)`
  display: ${({ active }) => (active ? '' : 'none')};
`;
