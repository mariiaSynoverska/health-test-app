import { FC } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface IMultiSelect {
  label: string;
  value: string[];
  options: string[];
  handleChange: (e: SelectChangeEvent) => void;
}

export const MultiSelect: FC<IMultiSelect> = ({ label, value, options, handleChange }) => {
  return (
    <FormControl sx={{ m: 1, width: '25ch' }}>
      <InputLabel id={`${label}-input`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-milti-select`}
        multiple
        value={value as unknown as string}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}