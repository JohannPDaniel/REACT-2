// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-top: 16px;
	width: 100%;
	max-width: 300px;

	input, select {
		padding: 12px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	div {
		display: flex;
		align-items: center;
		gap: 10px;
	}


`;
