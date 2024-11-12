import { Assessment } from '../../types/assessment.types';
import { Button } from "../Button";
import { TableStyled } from "./Styled";

const columns = ['Id', 'Título', 'Descrição', 'Nota', 'Criado Em', 'Ações'];

interface TableAssessmentsProps {
	rows: Assessment[];
	loading?: boolean
}
export const TableAssessments = ( { rows, loading }: TableAssessmentsProps ) => {
	if (loading) {
		return <h1>Buscando Avaliações ...</h1>
	}
	return (
		<TableStyled>
			<thead>
				<tr>
					{columns.map((col, index) => (
						<th key={index}>{col}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr key={row.id}>
						<td>{index + 1}</td>
						<td>{row.title}</td>
						<td>{row?.description}</td>
						<td>{row.grade}</td>
						<td>{new Date().toLocaleDateString('pt-BR')}</td>
						<td>
							<Button $color='info'>Editar</Button>
							<Button $color='error'>Excluir</Button>
						</td>
					</tr>
				))}
			</tbody>
		</TableStyled>
	);
};
