import { Assessment } from "../../types/assessment.types";
import { LoginRequest, SignUpRequest } from '../../types/auth.types';
import { api, ResponseApi } from './api.service';

export async function login(data: LoginRequest) {
	try {
		const response = await api.post<ResponseApi<{ token: string, studentId: string }>>(
			'/login',
			data
		);

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: error.response.data.message,
		};
	}
}

export async function signUp(data: SignUpRequest) {
	try {
		const response = await api.post<ResponseApi<Assessment>>(
			'/students',
			data
		);

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data
		}
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: error.response.data.message
		};
	}
}
