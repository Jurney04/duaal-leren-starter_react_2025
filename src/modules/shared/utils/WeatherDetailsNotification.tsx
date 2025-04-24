import { useGetWeatherData } from '~/shared/hooks/useGetWeatherData';
import { WeatherNotification } from './WeatherNotification';
import { Trans } from 'react-i18next';

export const WeatherDetailsNotification = () => {
	let today = new Date();
	today.setDate(today.getDate() - 1);
	let date = today.toISOString().slice(0, 10);
	const { data } = useGetWeatherData();
	// console.log(data);
	if (!data) {
		return <Trans>home.loading</Trans>;
	}

	const dataTommorow = data.forecast[date];
	console.log(dataTommorow);
	let tip = '';
	dataTommorow.condition.text.includes('Sunny')
		? (tip = <Trans>details.tips.1</Trans>)
		: dataTommorow.condition.text.includes('rain')
			? (tip = <Trans>details.tips.2</Trans>)
			: (tip = <Trans>details.tips.3</Trans>);

	return (
		<div>
			<h2>
				<img src={dataTommorow.condition.icon} alt="" />
				{dataTommorow.condition.text}
			</h2>
			<br />
			<p>
				<Trans
					values={{
						temp: dataTommorow.avgtemp,
					}}
				>
					details.temperature
				</Trans>
			</p>
			<p>
				<Trans values={{ chance: dataTommorow.chance_of_rain }}>
					details.chance_of_rain
				</Trans>
			</p>
			<br />
			<p>{tip}</p>
		</div>
	);
};
