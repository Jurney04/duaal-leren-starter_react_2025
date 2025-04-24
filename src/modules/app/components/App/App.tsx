import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
// import { Home } from '~/home/home.page.tsx';
export const App = () => {
	let navigate = useNavigate();
	useEffect(() => {
		navigate('/home');
	}, [navigate]);
	return <Outlet />;
};
