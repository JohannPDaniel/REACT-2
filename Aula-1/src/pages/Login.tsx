import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Form } from '../components/Form';
import { login } from '../configs/services/auth.service';
import { getToken } from '../configs/utils/getToken';

export const Login = () => {
	const [checked, setChecked] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const token = getToken();

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const data = {
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value,
		};
		setLoading(true);
		const response = await login(data);
		setLoading(false);

		if (!response.success) {
			alert(response.message);
			return;
		}

		if (checked) {
			localStorage.setItem('token', response.data!.token);
		}
		sessionStorage.setItem('token', response.data!.token);

		alert(response.message);
		navigate('/home');
	}

	useEffect(() => {
		if (token) {
			navigate('/home');
			return;
		}
	}, [ token, navigate ] );
	

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
