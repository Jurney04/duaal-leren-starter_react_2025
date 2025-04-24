import { createBrowserRouter } from 'react-router';

import { App } from '~/app/components/App/App.tsx';
import { Home } from '~/pages/home.page';
import { Details } from '~/pages/details.page.tsx';
import { LanguageButton } from '~/shared/utils/LanguageButton';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/home',
				element: <Home />,
			},
		],
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/details',
		element: <Details />,
	},
]);
