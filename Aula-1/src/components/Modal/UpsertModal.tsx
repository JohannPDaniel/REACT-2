import { Button } from '../Button';
import { Form } from '../Form';
import { Modal } from './Modal';

interface UpsertModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const UpsertModal = ({ isOpen, onClose }: UpsertModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title='Cadastrar Avaliação'>
			<Form>
				<input
					type='text'
					placeholder='Titulo'
					name='title'
				/>
				<input
					type='text'
					placeholder='Descrição'
					name='description'
				/>
				<input
					type='number'
					step={0.01}
					placeholder='Nota'
					name='grade'
				/>
				<div>
					<Button
						type='submit'
						$color='success'>
						Criar
					</Button>
					<Button
						type='reset'
						$color='error'
						onClick={onClose}>
						Cancelar
					</Button>
				</div>
			</Form>
		</Modal>
	);
};
