import React, { useState, useEffect, useContext } from "react";
import { getWeatherTomorrow } from "../calls/weatherCall";
import { Container } from "react-bootstrap";
import WeatherRow from "./WeatherRow";
import { URLContext } from "../contexts/URLContext";

function WeatherContainerTomorrow() {
  const [hoursList, setHoursList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [url, setUrl] = useContext(URLContext);

  useEffect(() => {
    getWeatherTomorrow(url)
      .then(response => {
        setHoursList(response.tomorrow);
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

export default WeatherContainerTomorrow;
