import { useGetWeatherData } from '~/shared/hooks/useGetWeatherData';
import { Trans } from 'react-i18next';
import { getDate } from '../hooks/useGetDate';

export const WeatherDetailsNotification: React.FC = () => {
	const date = getDate();

	interface WeatherCondition {
		text: string;
		icon: string;
	}

	interface WeatherForecast {
		condition: WeatherCondition;
		avgtemp: number;
		chance_of_rain: number;
	}

	interface WeatherData {
		forecast: {
			[key: string]: WeatherForecast;
		};
	}

	const { data }: { data: WeatherData | undefined } = useGetWeatherData();
	// console.log(data);

	if (!data) {
		return <Trans>home.loading</Trans>;
	}

	const dataTommorow = data.forecast[date];
	let tip: JSX.Element | string = '';

	dataTommorow.condition.text.includes('Sunny') ||
	dataTommorow.condition.text.includes('cloud')
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
