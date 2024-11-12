import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Form } from '../components/Form';
import { login } from '../configs/services/auth.service';
import { getDataHeaders } from "../configs/utils/getDataHeaders";

export const Login = () => {
	const [checked, setChecked] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dataHeaders = getDataHeaders();

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const dataBody = {
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value,
		};
		setLoading(true);
		const response = await login(dataBody);
		setLoading(false);

		if (!response.success) {
			alert(response.message);
			return;
		}

		const dataHeaders = {
			token: response.data?.token,
			studentId: response.data?.studentId,
		};

		if (checked) {
			localStorage.setItem('dataHeaders', JSON.stringify(dataHeaders));
		}
		sessionStorage.setItem('dataHeaders', JSON.stringify(dataHeaders));

		alert(response.message);
		navigate('/home');
	}

	useEffect(() => {
		if (dataHeaders?.token) {
			navigate('/home');
			return;
		}
	}, [dataHeaders?.token, navigate]);

	return (
		<Container $fullHeight>
			<Form onSubmit={onSubmit}>
				<h1>Login</h1>
				<input
					type='email'
					placeholder='E-mail'
					name='email'
				/>
				<input
					type='password'
					placeholder='Senha'
					name='password'
				/>
				<div>
					<input
						type='checkbox'
						name='logged'
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>
					<label htmlFor='logged'>Deseja permanecer logado?</label>
				</div>

				<small>
					Ainda não tem conta? <Link to={'/signup'}>Criar conta</Link>
				</small>

				<Button
					type='submit'
					disabled={loading}>
					Entrar
				</Button>
			</Form>
		</Container>
	);
};
