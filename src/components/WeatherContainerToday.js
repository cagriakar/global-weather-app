import React, { useState, useEffect, useContext } from 'react';
import { getWeatherToday } from '../calls/weatherCall';
import { Container } from 'react-bootstrap';
import WeatherRow from './WeatherRow';
import { URLContext } from '../contexts/URLContext';

function WeatherContainerToday() {
	const [hoursList, setHoursList] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [url, setUrl] = useContext(URLContext);

	useEffect(() => {
		getWeatherToday(url)
			.then((response) => {
				setHoursList(response.today);
			})
			.catch((error) => console.log(error));
		return () => {};
	}, [url]);

	return (
		<Container className="px-auto mx-auto">
			{hoursList?.map((hour, index) => (
				<WeatherRow key={index} data={hour}></WeatherRow>
			))}
		</Container>
	);
}

export default WeatherContainerToday;
