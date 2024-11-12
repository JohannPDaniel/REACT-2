import { Assessment } from '../../types/assessment.types';
import { api, ResponseApi } from './api.service';

export async function getAssessment(token: string) {
	try {
		const response = await api.get<ResponseApi<Assessment[]>>('/assessments', {
			headers: {
				Authorization: token,
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
