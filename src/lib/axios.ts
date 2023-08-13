import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dt-money-fake-api.vercel.app',
});