import dayjs from 'dayjs';

import { TDataProgram, TProgram, TDataResident, TResident } from '../types';

export const generatePrograms = (programs: TDataProgram[], residents: TDataResident[]): TProgram[] => programs.map(({
  id, name, parentId, recurrence, createdAt, updatedAt, applicantId, start, end, ...rest
}) => {
  const attendance = rest.attendance.map(({ residentId }) => {
    const resident = residents.find(({ id }) => id === residentId);

    if (!resident) return { residentId };

    const {
      id, name, birthDate, moveInDate, attendance, createdAt, updatedAt, applicantId, firstName, lastName, preferredName, ...rest
    } = resident;
    return {
      id,
      name,
      birthDate: dayjs(birthDate).format('YYYY-MM-DD'),
      moveInDate: dayjs(moveInDate).format('YYYY-MM-DD'),
      ...rest,
    };
  })

  return {
    id,
    name,
    start: dayjs(start).format('YYYY-MM-DD'),
    end: dayjs(end).format('YYYY-MM-DD'),
    ...rest,
    attendance,
  }
});

export const generateResidents = (residents: TDataResident[], programs: TDataProgram[]): TResident[] => residents.map(({
  id,
  name,
  ambulation,
  attendance,
  birthDate,
  levelOfCare,
  moveInDate,
  room,
  status,
}) => {
  const attendanceFormatted = attendance.map(({ programId }) => {
    const program = programs.find(({ id }) => id === programId);

    if (!program) return { programId };

    const {
      id, name, location, start, end,
    } = program;
    return {
      id,
      name,
      location,
      start: dayjs(start).format('YYYY-MM-DD'),
      end: dayjs(end).format('YYYY-MM-DD'),
    };
  })

  return {
    id,
    name,
    ambulation,
    birthDate: dayjs(birthDate).format('YYYY-MM-DD'),
    levelOfCare,
    moveInDate: dayjs(moveInDate).format('YYYY-MM-DD'),
    room,
    status,
    attendance: attendanceFormatted,
  }
});