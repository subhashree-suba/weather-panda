import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import './detail.css'

const detail = () => {
  return (
    <Fragment>
      <Row className="degree-toggle">
        <Col sm={{ span: 3, offset: 9 }}>
          <p className="degree">&#8451;</p>
          <p className="farenheit">&#8457;</p>
        </Col>
      </Row>

      <Row className="temp-now-row">
        <Row className="right-now-row">
          <Col sm={12}>
            Right Now:
          </Col>
        </Row>
        <Row className="temp-row">
          <Col sm={6} className="separation">
            <p className="temp-now">20&#176;</p>
            <p>PARTLY CLOUDY</p>
          </Col>
          <Col sm={6} className="separation">
            <p>Feels like 21&#176;</p>
            <p>UV Index 2 0f 10</p>
          </Col>
        </Row>
      </Row>

      <Row className="temp-now-row">
        <Row className="temp-row">
          <Col sm={7} className="separation">
            <p>Time: </p>
            <p>Wind Speed: </p>
            <p>Pressure: </p>
          </Col>
          <Col sm={5} className="separation">
            <p>Dew Point: </p>
            <p>Humidity: </p>
          </Col>
        </Row>
      </Row>

      <Row className="temp-now-row">
        <Row className="right-now-row">
          <Col sm={12}>
            Right Now:
          </Col>
        </Row>
        <Row className="temp-row">
          <Col sm={6} className="separation">
            <p className="temp-now">20&#176;</p>
            <p>PARTLY CLOUDY</p>
          </Col>
          <Col sm={6} className="separation">
            <p>Feels like 21&#176;</p>
            <p>UV Index 2 0f 10</p>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default detail;
