export enum EStatus {
  Active = "Active",
  Declined = "Declined",
  Passive = "Passive",
}

export type TAttendance = {
  programId: number,
  residentId: number,
  status: EStatus,
};

export enum ELevelOfCare {
  INDEPENDENT = "INDEPENDENT",
  ASSISTED = "ASSISTED",
  MEMORY = "MEMORY",
  LONGTERM = "LONGTERM"
}

export enum EAmbulation {
  NOLIMITATIONS = "NOLIMITATIONS",
  CANE = "CANE",
  WALKER = "WALKER",
  WHEELCHAIR = "WHEELCHAIR"
}

export type TDataResident = {
  ambulation: EAmbulation,
  applicantId: string | null,
  attendance: TAttendance[],
  birthDate: string,
  createdAt: string,
  firstName: string,
  id: number,
  lastName: string,
  levelOfCare: ELevelOfCare,
  moveInDate: string,
  name: string,
  preferredName: string,
  room: string,
  status: EStatus,
  updatedAt: string,
};

export type TResident = {
  id: number,
  name: string,
  ambulation: EAmbulation,
  attendance: any[],
  birthDate: string,
  levelOfCare: ELevelOfCare,
  moveInDate: string,
  room: string,
  status: EStatus,
};

export type TDataProgram = {
  id: number,
  name: string,
  parentId: string,
  applicantId: string,
  allDay: boolean,
  isRepeated: boolean,
  attendance: any[],
  recurrence: string,
  createdAt: string,
  updatedAt: string,
  dimension: string,
  start: string,
  end: string,
  location: string,
  facilitators: string[],
  hobbies: string[],
  levelOfCare: ELevelOfCare[],
  tags: string[],
};

export type TProgram = Omit<TDataProgram, "parentId" | "recurrence" | "createdAt" | "updatedAt" | "applicantId">