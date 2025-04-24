import { useGetNewData } from '../hooks/useGetNewData';
import { Trans } from 'react-i18next';

export const GetNewData = () => {
	return (
		<button onClick={useGetNewData()}>
			<Trans>home.reload</Trans>
		</button>
	);
};
