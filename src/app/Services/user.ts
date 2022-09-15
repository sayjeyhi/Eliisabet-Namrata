import { API_BASE, User } from '../Constants';
import axios from "axios";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
};

export const fetchUser = async (id: number): Promise<User> => {
  const res = await fetch(`${API_BASE}/users/${id}`);
  return res.json();
};

export const addUser = async () => {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
};

export const updateUser = async () => {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
};


export const deleteUser = async (id: number) => {
  const { data } = await axios.delete(`${API_BASE}/users/${id}`);
  return data;
};
