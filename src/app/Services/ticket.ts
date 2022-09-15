import axios from 'axios'
import { API_BASE, Ticket } from '../Constants';

export const fetchTickets = async (status?: string): Promise<Ticket[]> => {
  const { data } = await axios.get(`${API_BASE}/tickets${status ? '?status='+ status : ''}`);
  return data;
};

export const fetchTicket = async (id: number): Promise<Ticket> => {
  const res = await fetch(`${API_BASE}/tickets/${id}`);
  return res.json();
};

export const addTicket = async () => {
  const res = await fetch(`${API_BASE}/tickets`);
  return res.json();
};

export const updateTicket = async () => {
  const res = await fetch(`${API_BASE}/tickets`);
  return res.json();
};

export const deleteTicket = async (id: number) => {
  const { data } = await axios.delete(`${API_BASE}/tickets/${id}`);
  return data;
};
