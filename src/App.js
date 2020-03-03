import React from "react";
import "./App.css";
import WeatherContainerToday from "./components/WeatherContainerToday";
import WeatherContainerTomorrow from "./components/WeatherContainerTomorrow";
import WeatherContainerOtherDay from "./components/WeatherContainerOtherDay";
import Header from "./components/Header";
import Navigate from "./components/Navigate";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { URLProvider } from "./contexts/URLContext";

function App() {
  return (
    <Router>
      <div className="App">
        <URLProvider>
          <Header></Header>
          <Navigate></Navigate>
          <Switch>
            <Route path="/" exact component={WeatherContainerToday}></Route>
            <Route
              path="/yarin"
              exact
              component={WeatherContainerTomorrow}
            ></Route>
            <Route
              path="/ertesi-gün"
              exact
              component={WeatherContainerOtherDay}
            ></Route>
          </Switch>
          <Navigate></Navigate>
          <Footer></Footer>
        </URLProvider>
      </div>
    </Router>
  );
}

export default App;
