import { SectionTitle, Section } from '../CommonElements';
import { CustomGridItem, Grid, GridItem } from './TipSelectorElements';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { InputField } from '../input/InputElements';

const TipValues = [5, 10, 15, 25, 50];

export default function TipSelector({ value, onSelect }) {
  const [customActive, setCustomActive] = useState(false);

  const customContent = customActive ? (
    <InputField
      type='number'
      placeholder='0'
      value={value || ''}
      onChange={e => onSelect(Math.abs(Number(e.target.value)))}
    />
  ) : (
    'custom'
  );

  return (
    <Section>
      <SectionTitle>Select Tip %</SectionTitle>
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
          {customContent}
        </CustomGridItem>
      </Grid>
    </Section>
  );
}

TipSelector.propTypes = {
  value: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};
