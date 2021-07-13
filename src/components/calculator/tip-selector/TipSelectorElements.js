import styled from 'styled-components';
import Colors from '../../../Colors';

export const Container = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  margin-top: 1em;
`;

export const GridItem = styled.div`
  font-size: 1.7em;
  text-align: center;
  color: ${Colors.white};
  background: ${Colors.darkCyan};
  padding: 0.4em 0.3em;
  border-radius: 0.3em;
  margin-bottom: 1em;
  font-weight: bold;
`;

export const CustomGridItem = styled(GridItem)`
  text-transform: capitalize;
  color: ${Colors.darkGrayCyan1};
  background: ${Colors.lightGrayCyan2};
`;
