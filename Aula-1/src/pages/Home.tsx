import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/Container';
import { UpsertModal } from '../components/Modal/UpsertModal';
import { TableAssessments } from '../components/Table/Table';
import { getAssessment } from '../configs/services/assessment.service';
import { Assessment } from '../types/assessment.types';
import { Button } from './../components/Button';
import { getDataHeaders } from '../configs/utils/getDataHeaders';

export const Home = () => {
	const [listAssessments, setListAssessments] = useState<Assessment[]>([]);
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();
	const dataHeaders = getDataHeaders();

	function handleToggleUpsertModal() {
		setOpenModal(!openModal);
	}

	function logout() {
		localStorage.removeItem('dataHeaders');
		sessionStorage.removeItem('dataHeaders');
		navigate('/');
	}

	const fetchAssessments = useCallback(async () => {
		setLoading(true);
		const response = await getAssessment(
			dataHeaders!.token,
			dataHeaders!.studentId
		);
		setLoading(false);

		if (!response.success) {
			if (response.message) {
				localStorage.removeItem('dataHeaders');
				sessionStorage.removeItem('dataHeaders');
				alert(response.message);
				navigate('/');
				return;
			}
			alert(response.message);
			return;
		}
		setListAssessments(response.data || []);
	}, [dataHeaders?.token, navigate]);

	useEffect(() => {
		if (!dataHeaders?.token) {
			navigate('/');
			return;
		}

		fetchAssessments();
	}, [dataHeaders?.token, navigate, fetchAssessments]);

	return (
		<>
			<header>
				<Button
					onClick={logout}
					$color='error'>
					Sair
				</Button>
				<Button
					$color='info'
					onClick={handleToggleUpsertModal}>
					Nova Avaliação
				</Button>
			</header>
			<Container>
				<h1>Minhas Avaliações</h1>

				<TableAssessments
					rows={listAssessments}
					loading={loading}
				/>
			</Container>
			<UpsertModal
				isOpen={openModal}
				onClose={ handleToggleUpsertModal }
				onSave={() => console.log("Chamou ...")}
			/>
		</>
	);
};
