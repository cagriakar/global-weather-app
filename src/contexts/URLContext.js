import React, { useState, createContext } from "react";

const URLContext = createContext();

function URLProvider(props) {
  const [url, setUrl] = useState(
    "https://www.accuweather.com/tr/tr/aliaga/318256/hourly-weather-forecast/318256"
  );

  return (
    <URLContext.Provider value={[url, setUrl]}>
      {props.children}
    </URLContext.Provider>
  );
}

export { URLContext, URLProvider };
