export function getDataHeaders() {
	const sessionData = JSON.parse(
		sessionStorage.getItem('dataHeaders') || 'null'
	);
	const localData = JSON.parse(localStorage.getItem('dataHeaders') || 'null');

	const data = sessionData ? sessionData : localData;

	return data ? { token: data.token, studentId: data.studentId } : null;
}
