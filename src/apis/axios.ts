import { BASE_URL } from '@/apis/config';
import axios from 'axios';

axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({ baseURL: BASE_URL });
