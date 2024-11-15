// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const ModalRoot = styled.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
    min-width: 300px;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
`;