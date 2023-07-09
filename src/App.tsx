import React from 'react';
import logo from './logo.svg';
import './App.css';
import CBar from './chart/CBar';

// register chart
import { Chart as ChartJS, registerables } from 'chart.js';
import CBubble from './chart/CBubble';
import Doughnut from './chart/Doughnut';
import Line from './chart/Line';
import Polar from './chart/Polar';
import Radar from './chart/Radar';
import Scatter from './chart/Scatter';
ChartJS.register(...registerables);
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CBar></CBar>
        <br />
        <CBubble />
        <Doughnut />
        <Line />
        <Polar />
        <Radar />
        <Scatter />
      </header>
    </div >
  );
}

export default App;
