export const API_BASE = 'http://localhost:3004';

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  dob: string,
  address: string,
  image:string
}

export interface Ticket {
  id: number,
  userId?: number,
  number: string,
  status: TaskStates,
}

export type TaskStates = "assigned" | "completed" | "unassigned";
