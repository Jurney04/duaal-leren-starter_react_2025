import TrashChecker from './TrashChecker';
import styles from '../components/App/app.module.scss';
import { clsx } from 'clsx';

function TrashContainer() {
	if (TrashChecker().includes('paper') || TrashChecker().includes('carton')) {
		return (
			<div className={clsx(styles['p-home__paper'])}>
				Paper and carton
			</div>
		);
	} else if (TrashChecker().includes('PMD')) {
		return <div className={clsx(styles['p-home__plastic'])}>PMD</div>;
	} 
}
export default TrashContainer;
