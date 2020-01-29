import React, { Component } from 'react';
import axios from 'axios';

import HomePage from '../../components/home';
import CurrentData from '../../helper/mock-data/current';
import ForecastData from '../../helper/mock-data/forecast';

class Home extends Component {
  componentDidMount() {
    // axios.get('https://react-my-burger.firebaseio.com/ingredients.json')
    //   .then(response => {
    //     console.log(typeof (response))
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   });
  }

  render() {
    return (
      <HomePage 
      current={CurrentData}
      forecast={ForecastData} 
      />
    )
  }
}

export default Home; 