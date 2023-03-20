import { FC, useCallback, useMemo, useState } from 'react';
import { Dayjs } from 'dayjs';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from '@mui/material';

import { DatePicker } from '../../../components/DatePicker';
import { CustomSelect } from '../../../components/CustomSelect';

import { createResident } from '../../../api';
import { EAmbulation, ELevelOfCare } from '../../../types';

interface ICreateResidentForm {
  handleChangeResidentId: (residentId: number) => void;
}


export const CreateResidentForm: FC<ICreateResidentForm> = ({ handleChangeResidentId }) => {
  // TODO: refactor with using formik
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Dayjs>();
  const [moveInDate, setMoveInDate] = useState<Dayjs>();
  const [ambulation, setAmbulation] = useState<EAmbulation>();
  const [levelOfCare, setLevelOfCare] = useState<ELevelOfCare>();
  const [error, setError] = useState<string>();

  const handleChangeAmbulation = useCallback((e: SelectChangeEvent) => {
    setAmbulation(e.target.value as EAmbulation);
  }, []);

  const handleChangeLevelOfCare = useCallback((e: SelectChangeEvent) => {
    setLevelOfCare(e.target.value as ELevelOfCare);
  }, []);

  const handleBirthDate = useCallback((value: Dayjs) => {
    setBirthDate(value);
  }, []);

  const handleMoveInDate = useCallback((value: Dayjs) => {
    setMoveInDate(value);
  }, []);

  const handleCreate = useCallback(async () => {
    if (!ambulation || !levelOfCare || !birthDate || !moveInDate) return;

    try {
      const { residentId } = await createResident({
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        birthDate: birthDate.format('YYYY-MM-DD'),
        moveInDate: moveInDate.format('YYYY-MM-DD'),
        room,
        ambulation,
        levelOfCare,
      })
      handleChangeResidentId(residentId)
    } catch (e) {
      const error = e as { message: string };
      setError(error.message);
    }
  }, [ambulation, levelOfCare, birthDate, moveInDate, firstName, lastName, room, handleChangeResidentId]);

  const disableCreate = useMemo(
    () => {
      return !firstName || !lastName || !room || !ambulation || !levelOfCare || !birthDate || !moveInDate;
    }, [ambulation, birthDate, firstName, lastName, levelOfCare, moveInDate, room]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '25ch',
        }
      }}
      noValidate
      autoComplete="off"
    >
      <Box component="div">
        <TextField
          required
          id="outlined-required"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>
      <Box>
        <DatePicker
          label="Birth Date"
          value={birthDate}
          handleChange={handleBirthDate}
        />
        <DatePicker
          label="Move In Date"
          value={moveInDate}
          handleChange={handleMoveInDate}
        />
      </Box>
      <Box component="div">
        <CustomSelect
          value={ambulation}
          label="Ambulation"
          options={Object.values(EAmbulation)}
          handleChange={handleChangeAmbulation}
        />
        <CustomSelect
          value={levelOfCare}
          label="Level Of Care"
          options={Object.values(ELevelOfCare)}
          handleChange={handleChangeLevelOfCare}
        />
      </Box>
      <Box component="div">
        <TextField
          required
          id="outlined-required"
          label="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ m: 1 }}
        size="medium"
        onClick={handleCreate}
        disabled={disableCreate}
      >
        Create
      </Button>
      {error && <div>Error: {error}</div>}
    </Box>
  );
};
