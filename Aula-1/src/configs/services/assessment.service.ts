import {
	Assessment,
	CreateAssessmentRequest,
} from '../../types/assessment.types';
import { api, ResponseApi } from './api.service';

export async function getAssessment(token: string, studentId: string) {
	try {
		const response = await api.get<ResponseApi<Assessment[]>>('/assessments', {
			headers: {
				Authorization: token,
				'x-student-id': studentId,
			},
		});

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: `Erro: ${error.response.data.message}`,
		};
	}
}

export async function createAssessment(
	data: CreateAssessmentRequest,
	token: string,
	studentId: string
) {
	try {
		const response = await api.post<ResponseApi<Assessment>>(
			'/assessments',
			data,
			{
				headers: {
					Authorization: token,
					'x-student-id': studentId
				},
			}
		);

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: `Erro: ${error.response.data.message}`,
		};
	}
}
