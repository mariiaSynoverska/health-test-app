import { FC } from 'react';
import { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';

interface IDatePicker {
  label: string;
  value?: Dayjs;
  handleChange: any;
}

export const DatePicker: FC<IDatePicker> = ({ label, value, handleChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePickerMUI label={label} value={value} onChange={handleChange} />
    </ LocalizationProvider>
  );
}