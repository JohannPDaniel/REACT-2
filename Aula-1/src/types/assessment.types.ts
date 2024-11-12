export interface Assessment {
	id: string;
	title: string;
	description?: string;
	grade: number;
	studentId: string;
	createdAt: Date;
}


// export interface CreateAssessmentRequest {
// 	title: string;
// 	description?: string;
// 	grade: number;
// }

// export type CreateAssessmentRequest = Omit<Assessment, "id" | "createdAt">
export type CreateAssessmentRequest = Pick<Assessment, "title" | "description" | "grade">