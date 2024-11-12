import { GlobalStyle } from './configs/global/GlobalStyled';
import AppRoutes from './configs/routes/AppRoutes';

function App () {
	const originalWarn = console.warn;

	console.warn = (...args) => {
		if (
			typeof args[0] === 'string' &&
			args[0].includes('React Router Future Flag Warning')
		) {
			return; 
		}
		originalWarn(...args);
	};

	return (
		<>
			<AppRoutes />
			<GlobalStyle />
		</>
	);
}

export default App;
