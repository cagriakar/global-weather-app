import React, { useState, useEffect, useContext } from "react";
import { getWeatherOtherDay } from "../calls/weatherCall";
import { Container } from "react-bootstrap";
import WeatherRow from "./WeatherRow";
import { URLContext } from "../contexts/URLContext";

function WeatherContainerOtherDay() {
  const [hoursList, setHoursList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [url, setUrl] = useContext(URLContext);

  useEffect(() => {
    getWeatherOtherDay(url)
      .then(response => {
        setHoursList(response.otherDay);
      })
      .catch(error => console.log(error));
    return () => {};
  }, [url]);

  return (
    <Container className="px-auto mx-auto">
      {hoursList.map((hour, index) => (
        <WeatherRow key={index} data={hour}></WeatherRow>
      ))}
    </Container>
  );
}

export default WeatherContainerOtherDay;
