import { useQuery } from 'react-query'

import { getPrograms, getResidents } from '../api';
import { generatePrograms, generateResidents } from '../utils';
import { TProgram, TResident } from '../types';

type TData = {
  residents: TResident[],
  programs: TProgram[]
  isLoading: boolean,
  isError: boolean,
  refetchPrograms: () => void;
  refetchResidents: () => void;
}

export const useData = (): TData => {
  const programsRes = useQuery('programs', getPrograms);
  const residentsRes = useQuery('programs', getResidents);

  return {
    isLoading: programsRes.isLoading || residentsRes.isLoading,
    isError: programsRes.isError || residentsRes.isError,
    residents: residentsRes.data && programsRes.data ? generateResidents(residentsRes.data, programsRes.data) : [],
    programs: residentsRes.data && programsRes.data ? generatePrograms(programsRes.data, residentsRes.data) : [],
    refetchPrograms: programsRes.refetch,
    refetchResidents: residentsRes.refetch,
  };
};