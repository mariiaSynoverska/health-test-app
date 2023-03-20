import { FC } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ICustomSelect {
  label: string;
  value?: string;
  options: string[] | { value: string | number, label: string }[];
  handleChange: (e: SelectChangeEvent) => void;
}

export const CustomSelect: FC<ICustomSelect> = ({ label, value, options, handleChange }) => {
  return (
    <FormControl sx={{ m: 1, width: '25ch' }}>
      <InputLabel id={`${label}-input`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map(option => typeof option === "string" ?
          <MenuItem value={option} key={option}>{option}</MenuItem> :
          <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>)}
      </Select>
    </FormControl>
  );
}