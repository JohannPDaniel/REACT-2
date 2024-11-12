import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export interface ResponseApi<T> {
	success: boolean;
	message: string;
	data?: T;
}

export const api = axios.create({
	baseURL,
});
