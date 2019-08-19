import React from "react";
import WowChart from "./chart"
import "./app.scss";

const options = {
  focusTarget: 'category',
  legend: { position: 'none' },
  chartArea: { width: '90%', height: '70%', top: '5' },
  backgroundColor: '#ffffff',
  loader: '{<div>Loading Chart</div>}',
  vAxis: {
    gridlineColor: '#d4d4d4', textStyle: { color: '#463a33' }, baselineColor: '#463a33',
  },
  hAxis: { textStyle: { color: '#463a33' } },
  animation: {
    duration: 1000,
    easing: 'out',
    startup: true,
  },
};

const data = [
  ["Month-day", "Guardians of the Galaxy", "The Avengers"],
  ["08-11", 12, 0],
  ["08-12", 7, 0],
  ["08-13", 14, 0],
  ["08-14", 5, 0],
  ["08-15", 10, 0],
  ["08-16", 7, 0],
];

const App = () => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="panel">
          <h1> Graphycs </h1>
          <div class="chart">
            <WowChart data={data} options={options}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default App;
