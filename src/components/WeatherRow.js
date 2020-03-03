import React from "react";
import { Row, Col } from "react-bootstrap";

function WeatherRow({ data }) {
  return (
    <Row className="weather-row">
      <Col xs={12} lg={6}>
        <Row>
          <Col xs={3} sm={3} className="hour px-0">{`${data.hour} : 00`}</Col>
          <Col xs={4} sm={3}>
            <Row>
              <Col className="px-0">
                <img
                  src={`https://www.accuweather.com${data.image}`}
                  alt={data.description}
                ></img>
              </Col>
              <Col className="header-info">{`${data.temp} C`}</Col>
            </Row>
            <Row>
              <Col className="real-feel">{data.realFeel}</Col>
            </Row>
          </Col>
          <Col xs={3} sm={3} className="header-info px-0">
            {data.description}
          </Col>
          <Col xs={2} sm={3} className="header-info px-0 py-2">
            {data.precip}
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6}>
        <Row className="py-3">
          <Col xs className="px-0">
            <Col
              className="additional-info px-1"
              style={{ textDecoration: "underline" }}
            >
              {data.wind.substr(0, 6)}
            </Col>
            <Col className="additional-info px-1">{data.wind.substr(8)}</Col>
          </Col>
          <Col xs className="px-0">
            <Col
              className="additional-info px-1"
              style={{ textDecoration: "underline" }}
            >
              {data.highWind.substr(0, 18)}
            </Col>
            <Col className="additional-info px-1">
              {data.highWind.substr(20)}
            </Col>
          </Col>
          <Col xs className="px-0">
            <Col
              className="additional-info px-1"
              style={{ textDecoration: "underline" }}
            >
              {data.moisture.substr(0, 3)}
            </Col>
            <Col className="additional-info px-1">
              {data.moisture.substr(5)}
            </Col>
          </Col>
          <Col xs className="px-0">
            <Col
              className="additional-info px-1"
              style={{ textDecoration: "underline" }}
            >
              {data.cloud.substr(0, 16)}
            </Col>
            <Col className="additional-info px-1">{data.cloud.substr(18)}</Col>
          </Col>
          <Col xs className="px-0">
            <Col
              className="additional-info px-1"
              style={{ textDecoration: "underline" }}
            >
              {data.rain.substr(0, 6)}
            </Col>
            <Col className="additional-info px-1">{data.rain.substr(8)}</Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default WeatherRow;
