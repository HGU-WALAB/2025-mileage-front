import { BASE_URL } from '@/apis/config';
import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: BASE_URL });
