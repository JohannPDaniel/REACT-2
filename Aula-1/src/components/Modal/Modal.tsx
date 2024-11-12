import React from 'react';
import { ModalContent, ModalHeader, ModalRoot } from './styled';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}
export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	return (
		<>
			{isOpen ? (
				<ModalRoot onClick={onClose}>
					<ModalContent onClick={(e) => e.stopPropagation()}>
						<ModalHeader>
							<h2>{title}</h2>
						</ModalHeader>
						<div>{children}</div>
					</ModalContent>
				</ModalRoot>
			) : null}
		</>
	);
};
