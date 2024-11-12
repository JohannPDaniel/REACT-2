import styled from 'styled-components';

export const TableStyled = styled.table`
	width: 100%;
	max-width: 1000px;
	border-collapse: collapse;
	margin: 0 auto;

	thead {
		background-color: #fff;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
		overflow: hidden; 
	}

	th:nth-child(6),
	td:nth-child(6) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	tr:nth-child(even) {
		background-color: #f7f7f7;
	}

	tr:hover {
		background-color: #f1f1f1;
	}

	button {
		margin: 0;
	}
`;
