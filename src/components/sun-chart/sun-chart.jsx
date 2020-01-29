import React, { Fragment } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';

import './sun-chart.css'

let options = {  
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "80%"
      },
      startAngle: -90,
      endAngle: 90,    
      dataLabels: {
        showOn: "always",
        name: {
          show: false,
        },
        value: {
          show: false
        }
      }
    }
  },
  stroke: {
    lineCap: "round",
  }
};
let series = [67]

const sunChart = () => {
  return (
    <Fragment>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height="500"
      />
    </Fragment>
  );
}

export default sunChart;
