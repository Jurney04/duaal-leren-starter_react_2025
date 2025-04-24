import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';


export const App = () => {
	let navigate = useNavigate();
	useEffect(() => {
		navigate('/home');
	}, [navigate]);
	return <Outlet />;
};
