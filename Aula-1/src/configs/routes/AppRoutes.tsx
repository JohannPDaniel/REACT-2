import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '*',
		element: <h1>Not Found (404)</h1>,
		errorElement: <h1>Not Found (404)</h1>,
	},
]);

function AppRoutes() {
	return <RouterProvider router={router} />;
}

export default AppRoutes;
