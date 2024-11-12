import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/Container';
import { UpsertModal } from '../components/Modal/UpsertModal';
import { TableAssessments } from '../components/Table/Table';
import { getAssessment } from '../configs/services/assessment.service';
import { getToken } from '../configs/utils/getToken';
import { Assessment } from '../types/assessment.types';
import { Button } from './../components/Button';

export const Home = () => {
	const [listAssessments, setListAssessments] = useState<Assessment[]>([]);
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();
	const token = getToken();

	useEffect(() => {
		if (!token) {
			navigate('/');
			return;
		}
		async function fetchAssessment() {
			setLoading(true);
			const response = await getAssessment(token!);
			setLoading(false);

			if (!response.success) {
				if (response.message) {
					localStorage.removeItem('token');
					sessionStorage.removeItem('token');
					alert(response.message);
					navigate('/');
					return;
				}
				alert(response.message);
				return;
			}

			setListAssessments(response.data || []);
		}
		fetchAssessment();
	}, [token, navigate]);

	function handleToggleUpsertModal() {
		setOpenModal(!openModal);
	}

	function logout() {
		localStorage.removeItem('token');
		sessionStorage.removeItem('token');
		navigate('/');
	}

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
				onClose={handleToggleUpsertModal}
			/>
		</>
	);
};
