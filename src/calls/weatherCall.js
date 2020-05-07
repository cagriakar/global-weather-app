import { get } from 'axios';
import { load } from 'cheerio';
const jsonframe = require('jsonframe-cheerio');

const elementHour =
	window.screen.width < 768
		? '.hourly-card-nfl-header .date p'
		: '.hourly-forecast-card-header .date p';
const elementDate =
	window.screen.width < 768
		? '.hourly-card-nfl-header .date .sub'
		: '.hourly-forecast-card-header .date .sub';
const elementImage =
	window.screen.width < 768
		? '.hourly-card-nfl-header img @ data-src'
		: '.hourly-forecast-card-header img @ data-src';
const elementDescription =
	window.screen.width < 768
		? '.hourly-card-nfl-content p:nth-child(1)'
		: '.hourly-forecast-card-header span';
const elementRealFeel =
	window.screen.width < 768
		? '.hourly-card-nfl-header span'
		: '.hourly-forecast-card-content .panel:nth-child(1) p:nth-child(1)';
const elementPrecip =
	window.screen.width < 768
		? '.hourly-card-nfl-header .precip'
		: '.hourly-forecast-card-header .precip';
const elementWind =
	window.screen.width < 768
		? '.hourly-card-nfl-content p:nth-child(2)'
		: '.hourly-forecast-card-content .panel:nth-child(1) p:nth-child(2)';
const elementHighWind =
	window.screen.width < 768
		? '.hourly-card-nfl-content p:nth-child(3)'
		: '.hourly-forecast-card-content .panel:nth-child(1) p:nth-child(3)';
const elementMoisture =
	window.screen.width < 768
		? '.hourly-card-nfl-content p:nth-child(4)'
		: '.hourly-forecast-card-content .panel:nth-child(1) p:nth-child(4)';
const elementCloud =
	window.screen.width < 768
		? '.hourly-card-nfl-content p:nth-child(5)'
		: '.hourly-forecast-card-content .panel:nth-child(2) p:nth-child(1)';
const elementRain =
	window.screen.width < 768
		? '.hourly-card-nfl-content p:nth-child(6)'
		: '.hourly-forecast-card-content .panel:nth-child(2) p:nth-child(2)';
const elementSnow =
	window.screen.width < 768
		? '.hourly-card-nfl-content p:nth-child(7)'
		: '.hourly-forecast-card-content .panel:nth-child(2) p:nth-child(3)';

const elementSource = window.screen.width < 768 ? '.hourly-card-nfl' : '.hourly-forecast-card';

async function getWeatherToday(url) {
	try {
		const resToday = await get(url);
		const { data } = await resToday;
		const $ = load(data);
		jsonframe($);
		const frame = {
			location: '.location-label h1',
			today: {
				_s: elementSource,
				_d: [
					{
						hour: elementHour,
						date: elementDate,
						image: elementImage,
						temp: '.metric',
						description: elementDescription,
						precip: elementPrecip,
						realFeel: elementRealFeel,
						wind: elementWind,
						highWind: elementHighWind,
						moisture: elementMoisture,
						cloud: elementCloud,
						rain: elementRain,
						snow: elementSnow
					}
				]
			}
		};
		const weatherdataToday = await $('body').scrape(frame);
		return weatherdataToday;
	} catch (error) {
		console.log(error);
	}
}

async function getWeatherTomorrow(url) {
	try {
		const resTomorrow = await get(`${url}?day=2`);
		const { data } = await resTomorrow;
		const $ = load(data);
		jsonframe($);
		const frame = {
			tomorrow: {
				_s: elementSource,
				_d: [
					{
						hour: elementHour,
						date: elementDate,
						image: elementImage,
						temp: '.metric',
						description: elementDescription,
						precip: elementPrecip,
						realFeel: elementRealFeel,
						wind: elementWind,
						highWind: elementHighWind,
						moisture: elementMoisture,
						cloud: elementCloud,
						rain: elementRain,
						snow: elementSnow
					}
				]
			}
		};
		const weatherdataTomorrow = await $('body').scrape(frame);
		return weatherdataTomorrow;
	} catch (error) {
		console.log(error);
	}
}

async function getWeatherOtherDay(url) {
	try {
		const resOtherDay = await get(`${url}?day=3`);
		const { data } = await resOtherDay;
		const $ = load(data);
		jsonframe($);
		const frame = {
			otherDay: {
				_s: elementSource,
				_d: [
					{
						hour: elementHour,
						date: elementDate,
						image: elementImage,
						temp: '.metric',
						description: elementDescription,
						precip: elementPrecip,
						realFeel: elementRealFeel,
						wind: elementWind,
						highWind: elementHighWind,
						moisture: elementMoisture,
						cloud: elementCloud,
						rain: elementRain,
						snow: elementSnow
					}
				]
			}
		};
		const weatherdataOtherDay = await $('body').scrape(frame);
		return weatherdataOtherDay;
	} catch (error) {
		console.log(error);
	}
}

export { getWeatherToday, getWeatherTomorrow, getWeatherOtherDay };
