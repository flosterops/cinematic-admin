import { getLsToken } from './ls';

export const BASE_URL = 'http://localhost:5000';

export const getAuthHeaders = () => {
  const token = getLsToken();
  return { Authorization: token };
};
