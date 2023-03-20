import { FC, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from '@mui/material';

import { CustomSelect } from '../../../components/CustomSelect';

import { attendResident, getPrograms } from '../../../api';
import { EStatus, TDataProgram, } from '../../../types';

interface IAddResidentToProgramForm {
  residentId?: number;
}

export const AddResidentToProgramForm: FC<IAddResidentToProgramForm> = ({ residentId }) => {
  const [programId, setProgramId] = useState<number>();
  const [status, setStatus] = useState<EStatus>();
  const [programs, setPrograms] = useState<{ value: number, label: string }[]>([]);

  useEffect(() => {
    async function fetchPrograms() {
      const res: TDataProgram[] = await getPrograms();
      if (res) {
        setPrograms(res.map(({ id, name }) => {
          return {
            value: id,
            label: name
          }
        }));
      }
    }

    fetchPrograms();
  }, []);

  const handleChangeProgram = useCallback((e: SelectChangeEvent) => {
    setProgramId(Number(e.target.value));
  }, []);

  const handleChangeStatus = useCallback((e: SelectChangeEvent) => {
    setStatus(e.target.value as EStatus);
  }, []);

  const handleAdd = useCallback(async () => {
    if (!programId || !status || !residentId) return;

    await attendResident({ programId, residentId, status });
  }, [programId, residentId, status]);

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
      <h2>Add New Resident to Program</h2>
      <Box component="div">
        <CustomSelect
          value={String(programId)}
          label="Select Program"
          options={programs}
          handleChange={handleChangeProgram}
        />
        <CustomSelect
          value={status}
          label="Status"
          options={Object.values(EStatus)}
          handleChange={handleChangeStatus}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ m: 1 }}
        size="medium"
        onClick={handleAdd}
        disabled={!programId || !status || !residentId}
      >
        Add to Program
      </Button>
    </Box>
  );
};
