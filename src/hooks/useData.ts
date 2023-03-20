import { useState, useEffect } from 'react';

import { getPrograms, getResidents } from '../api';
import { generatePrograms, generateResidents } from '../utils';
import {
  TDataProgram, TProgram, TDataResident, TResident,
} from '../types';

type TData = {
  residents: TResident[],
  programs: TProgram[]
}

export const useData = (): TData => {
  const [residents, setResidents] = useState<TDataResident[]>([]);
  const [programs, setPrograms] = useState<TDataProgram[]>([]);

  useEffect(() => {
    async function fetchPrograms() {
      const res = await getPrograms();
      if (res) {
        setPrograms(res);
      }
    }

    fetchPrograms();
  }, []);

  useEffect(() => {
    async function fetchResidents() {
      const res = await getResidents();
      if (res) {
        setResidents(res);
      }
    }

    fetchResidents();
  }, []);

  return {
    residents: generateResidents(residents, programs),
    programs: generatePrograms(programs, residents),
  };
};