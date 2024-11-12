// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

interface ContainerProps {
    $fullHeight?: boolean
}

export const Container = styled.section<ContainerProps>`
	width: 100%;
	height: ${({$fullHeight}) => $fullHeight ? "100vh" : "auto"};
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;