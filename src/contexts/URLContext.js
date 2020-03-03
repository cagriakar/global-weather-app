import React, { useState, createContext } from "react";

const URLContext = createContext();

function URLProvider(props) {
  const [url, setUrl] = useState(
    "https://www.accuweather.com/tr/tr/kiyikoy/318696/hourly-weather-forecast/318696"
  );

  return (
    <URLContext.Provider value={[url, setUrl]}>
      {props.children}
    </URLContext.Provider>
  );
}

export { URLContext, URLProvider };
