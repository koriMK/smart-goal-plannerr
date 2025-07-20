import axios from 'axios';

const API_URL = 'http://localhost:3001/goals';

export const getGoals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addGoal = async (goal) => {
  const response = await axios.post(API_URL, goal);
  return response.data;
};

export const updateGoal = async (id, updatedGoal) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedGoal);
  return response.data;
};

export const deleteGoal = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};