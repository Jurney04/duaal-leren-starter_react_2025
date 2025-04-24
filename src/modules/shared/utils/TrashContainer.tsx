import styles from '~/app/components/App/app.module.scss';
import { clsx } from 'clsx';
import { useGetTrashData } from '~/shared/hooks/useGetTrashData';
import { getDate } from '../hooks/useGetDate';
import { Trans } from 'react-i18next';

export const TrashContainer = () => {
	const date = getDate();
	// console.log(date);

	const { data } = useGetTrashData();
	if (!data) {
		return (
			<div>
				<Trans>home.loading</Trans>
			</div>
		); // Return a loading indicator
	}

	const trashId = data[date].id;
	// console.log('TrashContainer', data);

	return trashId.includes('Loading') ? (
		<div>
			<Trans>home.loading</Trans>
		</div>
	) : trashId.includes('paper') ? (
		<div className={clsx(styles['p-home__paper'])}>
			<Trans>home.paper</Trans>
		</div>
	) : trashId.includes('PMD') ? (
		<div className={clsx(styles['p-home__plastic'])}>
			<Trans>home.plastic</Trans>
		</div>
	) : (
		<div>
			<Trans>home.noMatch</Trans>
		</div> // Handle case where trashId doesn't match expected types
	);
};
