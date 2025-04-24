import { useGetNewData } from '../hooks/useGetNewData';
import { Trans } from 'react-i18next';
import styles from '~/app/components/App/App.module.scss';
import { clsx } from 'clsx';

export const GetNewData = () => {
	return (
		<button
			onClick={useGetNewData()}
			className={clsx(styles['p-home__refresh'])}
		>
			<Trans>home.reload</Trans>
		</button>
	);
};
