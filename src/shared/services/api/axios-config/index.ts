import axios from 'axios';
import { Environment } from '../../../environments';
import { responseInterceptor } from './interceptors';

const api = axios.create({
  baseURL: Environment.URL_BASE,
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => responseInterceptor(error)
);

export { api };