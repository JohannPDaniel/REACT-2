import { Assessment } from '../../types/assessment.types';

const createdAt = new Date().getMilliseconds().toString() ;

// export const assessmentMock: Assessment[] = [
// {
// 	id: createdAt,
//     title: "Avaliação 1",
//     description: "Descrição 1",
//     grade: 8,
//     createdAt: new Date()
// },
// ];

export const assessmentMock: Assessment[] = Array.from({ length: 20 }, (_, index) => ({
	id: createdAt,
	title: `Avaliação ${index + 1}`,
	description: `Descrição ${index + 1}`,
	grade: index * 2,
	studentId: "",
	createdAt: new Date(),
}));
