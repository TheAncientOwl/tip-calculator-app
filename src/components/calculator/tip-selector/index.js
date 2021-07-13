import { Title, Section } from '../CommonElements';
import { CustomGridItem, Grid, GridItem } from './TipSelectorElements';

const TipValues = [5, 10, 15, 25, 50];

export default function TipSelector() {
  return (
    <Section>
      <Title>Select Tip %</Title>
      <Grid>
        {TipValues.map((item, index) => (
          <GridItem key={index}>{item}%</GridItem>
        ))}
        <CustomGridItem>custom</CustomGridItem>
      </Grid>
    </Section>
  );
}
