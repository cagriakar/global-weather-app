import { get } from "axios";
import { load } from "cheerio";
const jsonframe = require("jsonframe-cheerio");

function getCurrentPosition(options = { enableHighAccuracy: true }) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
}

async function getURL() {
  try {
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = await coords;
    const geoLoc = { lat: String(latitude), lng: String(longitude) };

    const res = await get(
      `https://www.accuweather.com/tr/search-locations?query=${geoLoc.lat},${geoLoc.lng}`
    );
    const { data } = await res;
    const $ = await load(data);
    jsonframe($);
    const frame = {
      link: "link @ href"
    };

    const response = await $("head").scrape(frame);
    const { link } = await response;
    const correctedLink = await link.replace("/weather-", "/hourly-weather-");
    const correctedLinkFinal = await correctedLink.replace("/en/", "/tr/");
    return correctedLinkFinal;
  } catch (error) {
    console.log(error);
  }
}

export { getURL };
