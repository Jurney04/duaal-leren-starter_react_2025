import styles from '~/app/components/App/app.module.scss';
import { clsx } from 'clsx';
import { TrashChecker } from './TrashChecker';

export const TrashContainer = () => {
	const data = TrashChecker();
	// Check if data is defined and is an array or string
	if (!data) {
		return null; // or return a loading indicator if appropriate
	}

	const renderContent = {
		Loading: 'loading',
		paper: (
			<div className={clsx(styles['p-home__paper'])}>
				Paper and carton
			</div>
		),
		PMD: <div className={clsx(styles['p-home__plastic'])}>PMD</div>,
	};

	const content = data.includes('Loading')
		? renderContent.Loading
		: data.includes('paper')
			? renderContent.paper
			: data.includes('PMD')
				? renderContent.PMD
				: null;

	return content;
};

// if (data.includes('loading')) {
// 	return 'Loading...';
// } else if (
// 	TrashChecker().includes('paper') ||
// 	TrashChecker().includes('carton')
// ) {
// 	return (
// 		<div className={clsx(styles['p-home__paper'])}>
// 			Paper and carton
// 		</div>
// 	);
// } else if (TrashChecker().includes('PMD')) {
// 	return <div className={clsx(styles['p-home__plastic'])}>PMD</div>;
// }
