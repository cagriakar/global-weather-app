import React, { useContext, useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { getWeatherToday } from "../calls/weatherCall";
import { Container } from "react-bootstrap";
import Fab from "@material-ui/core/Fab";
import { URLContext } from "../contexts/URLContext";
import { getURL } from "../calls/getURL";

function Header() {
  const [url, setUrl] = useContext(URLContext);
  const [location, setLocation] = useState("Kıyıköy, Kırklareli");

  function handleClick() {
    getURL().then(response => setUrl(response));
  }

  useEffect(() => {
    getWeatherToday(url)
      .then(response => {
        setLocation(response.location);
      })
      .catch(error => console.log(error));
    return () => {};
  }, [url]);

  return (
    <Container className="Header mt-2">
      <div className="header-right-panel">
        <img
          alt="sunny"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg"
        ></img>
        <img
          alt="cloudy"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg"
        ></img>
        <img
          alt="partially-cloudy"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy.svg"
        ></img>
        <img
          alt="rainy"
          src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg"
        ></img>
      </div>
      <div className="header-middle-panel">
        <LocationOnOutlinedIcon
          className="mb-2 ml-0 mr-2"
          style={{ fontSize: "30px" }}
        ></LocationOnOutlinedIcon>
        <h5>{location}</h5>
      </div>
      <div className="header-bottom-panel">
        <Fab
          onClick={handleClick}
          className="mt-2"
          variant="extended"
          size="small"
          aria-label="add"
          style={{
            border: "1px solid rgba(158, 158, 158, 0.5)",
            boxShadow: "8px 10px 15px -6px rgba(158, 158, 158, 1)",
            background: "white",
            borderRadius: "10px",
            opacity: "0.5",
            textTransform: "capitalize"
          }}
        >
          <img
            className="mr-2"
            alt="location-icon"
            src="https://www.accuweather.com//images/icons/icon-gps.svg"
          ></img>
          mevcut konumunu kullan
        </Fab>
      </div>
    </Container>
  );
}

export default Header;
