import { Chart } from "react-google-charts";
import React from "react";
import PropTypes from 'prop-types';

class WowChart extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      chartData: props.data
    };
  }

  generateData() {
    const data = [
      ["Month-day", "Guardians of the Galaxy", "The Avengers"],
      ["08-11", 12, 11],
      ["08-12", 7, 8],
      ["08-13", 14, 13],
      ["08-14", 5, 11],
      ["08-15", 10, 5],
      ["08-16", 7, 3],
    ];
    return data;
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ chartData: this.generateData() })
    }, 5000);
  }

  render() {
    return (
      <Chart
        chartType={this.props.chartType}
        data={this.state.chartData}
        options={this.props.options}
        width={this.props.width}
        height={this.props.height}
        legendToggle
      />
    );
  }
}

WowChart.propTypes = {
  chartType: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

WowChart.defaultProps = {
  chartType: "Line",
  data: [],
  options: {},
  width: "80%",
  height: "400px"
}

export default WowChart; 
