import { Title, Section } from '../CommonElements';
import { CustomGridItem, CustomTipInput, Grid, GridItem } from './TipSelectorElements';
import PropTypes from 'prop-types';
import { useState } from 'react';

const TipValues = [5, 10, 15, 25, 50];

export default function TipSelector({ value, onSelect }) {
  const [customActive, setCustomActive] = useState(false);

  return (
    <Section>
      <Title>Select Tip %</Title>
      <Grid>
        {TipValues.map((item, index) => (
          <GridItem
            key={index}
            onClick={() => {
              onSelect(item);
              setCustomActive(false);
            }}
            selected={!customActive && value === item}>
            {item}%
          </GridItem>
        ))}
        <CustomGridItem
          onClick={() => {
            setCustomActive(true);
            onSelect(0);
          }}
          selected={customActive}>
          custom
        </CustomGridItem>
      </Grid>
      <CustomTipInput active={customActive} icon='%' value={value} onValueChange={value => onSelect(value)} />
    </Section>
  );
}

TipSelector.propTypes = {
  value: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};
