import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import './home.css'
import Detail from '../detail/detail'
import SunChart from '../sun-chart/sun-chart'

const homePage = (props) => {
  console.log(props)
  return (
    <Container fluid className="home-container">
      <Row className="home-container">
        <Col sm={8}>
          <Row className="section-height">
            <Col sm={12}>
              <div>this</div>
            </Col>
          </Row>
          <Row className="section-height">
            <Col sm={12}>
              <SunChart />
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <Detail />
        </Col>
      </Row>
    </Container>
  );
}

export default homePage;
