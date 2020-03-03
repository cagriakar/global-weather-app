import { get } from "axios";
import { load } from "cheerio";
const jsonframe = require("jsonframe-cheerio");

async function getWeatherToday(url) {
  try {
    const resToday = await get(url);
    const { data } = await resToday;
    const $ = load(data);
    jsonframe($);
    const frame = {
      location: ".location-label h1",
      today: {
        _s: ".hourly-forecast-card",
        _d: [
          {
            hour: ".hourly-forecast-card-header .date p",
            date: ".hourly-forecast-card-header .date .sub",
            image: ".hourly-forecast-card-header img @ data-src",
            temp: ".metric",
            description: ".hourly-forecast-card-header span",
            precip: ".hourly-forecast-card-header .precip",
            realFeel:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(1)",
            wind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(2)",
            highWind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(3)",
            moisture:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(4)",
            cloud:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(1)",
            rain:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(2)",
            snow:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(3)"
          }
        ]
      }
    };
    const weatherdataToday = await $("body").scrape(frame);
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
        _s: ".hourly-forecast-card",
        _d: [
          {
            hour: ".hourly-forecast-card-header .date p",
            date: ".hourly-forecast-card-header .date .sub",
            image: ".hourly-forecast-card-header img @ data-src",
            temp: ".metric",
            description: ".hourly-forecast-card-header span",
            precip: ".hourly-forecast-card-header .precip",
            realFeel:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(1)",
            wind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(2)",
            highWind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(3)",
            moisture:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(4)",
            cloud:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(1)",
            rain:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(2)",
            snow:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(3)"
          }
        ]
      }
    };
    const weatherdataTomorrow = await $("body").scrape(frame);
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
        _s: ".hourly-forecast-card",
        _d: [
          {
            hour: ".hourly-forecast-card-header .date p",
            date: ".hourly-forecast-card-header .date .sub",
            image: ".hourly-forecast-card-header img @ data-src",
            temp: ".metric",
            description: ".hourly-forecast-card-header span",
            precip: ".hourly-forecast-card-header .precip",
            realFeel:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(1)",
            wind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(2)",
            highWind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(3)",
            moisture:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(4)",
            cloud:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(1)",
            rain:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(2)",
            snow:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(3)"
          }
        ]
      }
    };
    const weatherdataOtherDay = await $("body").scrape(frame);
    return weatherdataOtherDay;
  } catch (error) {
    console.log(error);
  }
}

export { getWeatherToday, getWeatherTomorrow, getWeatherOtherDay };
