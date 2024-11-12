import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Form } from '../components/Form';
import { signUp } from '../configs/services/auth.service';

export const SignUp = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const data = {
			name: e.currentTarget.nome.value,
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value,
			type: e.currentTarget.type.value,
			age: Number(e.currentTarget.age.value),
			cpf: e.currentTarget.cpf.value,
		};

		const confirmPassword = e.currentTarget.confirmPassword.value;

		if (data.password !== confirmPassword) {
			alert('As senhas não estão iguais !');
			return;
		}

		setLoading(true);
		const response = await signUp(data);
		setLoading(false);

		if (!response.success) {
			alert(response.message);
			return;
		}
		
		setTimeout(() => {
			navigate('/');
		}, 500);
	}
	return (
		<Container $fullHeight>
			<Form onSubmit={handleForm}>
				<h1>Cadastro</h1>
				<input
					type='text'
					placeholder='Nome'
					name='nome'
					required
				/>
				<input
					type='email'
					placeholder='E-mail'
					name='email'
					required
				/>

				<input
					type='number'
					placeholder='Idade'
					name='age'
				/>
				<input
					type='text'
					placeholder='cpf'
					maxLength={11}
					name='cpf'
					required
				/>

				<select name='type'>
					<option value=''>Selecione uma opção</option>
					<option value='M'>Matriculado</option>
					<option value='F'>Formado</option>
					<option value='T'>Tech Helper</option>
				</select>

				<input
					type='password'
					placeholder='Senha'
					name='password'
					required
				/>
				<input
					type='password'
					placeholder='Confirmar senha'
					name='confirmPassword'
					required
				/>

				<Button
					type='submit'
					disabled={loading}>
					Entrar
				</Button>
			</Form>
		</Container>
	);
};
