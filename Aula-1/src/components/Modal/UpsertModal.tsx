import { createAssessment } from '../../configs/services/assessment.service';
import { getDataHeaders } from '../../configs/utils/getDataHeaders';
import { Button } from '../Button';
import { Form } from '../Form';
import { Modal } from './Modal';

interface UpsertModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: () => void
}

export const UpsertModal = ({ isOpen, onClose, onSave }: UpsertModalProps) => {
	const dataHeaders = getDataHeaders();
	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!dataHeaders?.token) {
			return;
		}
		const dataBody = {
			title: e.currentTarget['title-ass'].value,
			description: e.currentTarget['description-ass'].value,
			grade: Number(e.currentTarget['grade-ass'].value),
		};
		const response = await createAssessment(dataBody, dataHeaders.token, dataHeaders.studentId);
		if (!response.success) {
			alert(response.message);
			return;
		}
		onSave()
		onClose()
	}
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Cadastrar Avaliação'>
			<Form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Titulo'
					name='title-ass'
					required
				/>
				<input
					type='text'
					placeholder='Descrição'
					name='description-ass'
				/>
				<input
					type='number'
					step={0.01}
					placeholder='Nota'
					name='grade-ass'
					required
					min='0'
					max='10'
				/>
				<div>
					<Button
						type='reset'
						$color='error'
						onClick={onClose}>
						Cancelar
					</Button>
					<Button
						type='submit'
						$color='success'>
						Criar
					</Button>
				</div>
			</Form>
		</Modal>
	);
};
