import axios from 'axios';
import { responseInterceptor } from './interceptors';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => responseInterceptor(error)
);

export { api };