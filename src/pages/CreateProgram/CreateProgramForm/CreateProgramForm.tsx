import { useCallback, useMemo, useState } from 'react';
import { Dayjs } from 'dayjs';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { DatePicker } from '../../../components/DatePicker';
import { MultiSelect } from '../../../components/MultiSelect';

import { createProgram } from '../../../api';
import { ELevelOfCare } from '../../../types';

export const CreateProgramForm = () => {
  // TODO: refactor with using formik
  const [name, setName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [startDate, setStartDate] = useState<Dayjs>();
  const [endDate, setEndDate] = useState<Dayjs>();
  const [levelOfCare, setLevelOfCare] = useState<ELevelOfCare[]>([]);
  const [hobbies, setHobbies] = useState<string>();
  const [facilitators, setFacilitators] = useState<string>();
  const [tags, setTags] = useState<string>();
  const [dimension, setDimension] = useState<string>();
  const [allDay, setAllDay] = useState<boolean>(false);
  const [isRepeated, setIsRepeated] = useState<boolean>(false);

  const handleChangeLevelOfCare = useCallback((e: SelectChangeEvent) => {
    const { value } = e.target;
    const values = typeof value === 'string' ? value.split(',') : value;
    setLevelOfCare(values as ELevelOfCare[]);
  }, []);

  const handleStartDate = useCallback((value: Dayjs) => {
    setStartDate(value);
  }, []);

  const handleEndDate = useCallback((value: Dayjs) => {
    setEndDate(value);
  }, []);

  const handleCreate = useCallback(async () => {
    if (!name || !location || !startDate || !endDate || !levelOfCare.length || !hobbies || !facilitators || !tags || !dimension) return;

    await createProgram({
      name,
      location,
      start: startDate.format('YYYY-MM-DD'),
      end: endDate.format('YYYY-MM-DD'),
      hobbies: hobbies.split(','),
      levelOfCare,
      facilitators: facilitators.split(','),
      dimension,
      tags: tags.split(','),
      allDay,
      isRepeated,
    });
  }, [name, location, startDate, endDate, levelOfCare, hobbies, facilitators, tags, dimension, allDay, isRepeated]);

  const disableCreate = useMemo(() => {
    return !name || !location || !startDate || !endDate || !levelOfCare.length || !hobbies || !facilitators || !tags || !dimension
  }, [startDate, endDate, levelOfCare, hobbies, facilitators, tags, dimension, name, location]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', },
      }}
      noValidate
      autoComplete="off"
    >
      <Box component="div">
        <TextField
          required
          id="outlined-required"
          label="Program name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Box>
      <Box>
        <DatePicker
          label="Start Date"
          value={startDate}
          handleChange={handleStartDate}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          handleChange={handleEndDate}
        />
      </Box>
      <Box component="div">
        <TextField
          required
          id="outlined-required"
          label="Hobbies"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Facilitators"
          value={facilitators}
          onChange={(e) => setFacilitators(e.target.value)}
        />
      </Box>
      <Box component="div">
        <TextField
          required
          id="outlined-required"
          label="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Dimension"
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
        />
      </Box>
      <Box component="div">
        <MultiSelect
          value={levelOfCare}
          label="Level Of Care"
          options={Object.values(ELevelOfCare)}
          handleChange={handleChangeLevelOfCare}
        />
      </Box>
      <Box component="div">
        <FormControlLabel
          control={(
            <Checkbox
              inputProps={{
                'aria-label': 'allDay',
              }}
              checked={allDay}
              onChange={(e) => setAllDay(e.target.checked)}
            />
          )}
          label="All Day"
          sx={{ width: '25ch', marginLeft: 0, }}
        />
        <FormControlLabel
          control={(
            <Checkbox
              inputProps={{
                'aria-label': 'isRepeated',
              }}
              checked={isRepeated}
              onChange={(e) => setIsRepeated(e.target.checked)}
            />
          )}
          label="Is Repeated"
          sx={{ m: 1, width: '25ch' }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ m: 1, }}
        size="medium"
        onClick={handleCreate}
        disabled={disableCreate}
      >
        Create
      </Button>
    </Box>
  );
};
