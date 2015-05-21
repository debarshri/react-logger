import React from 'react';
import BarChart from 'react-d3/barchart/BarChart';

export default class LogChart extends React.Component {
  
  render() {

 var barData = [
  {label: 'A', value: 5},
  {label: 'B', value: 6},
  {label: 'F', value: 7}
];

       return <BarChart
                  data={barData}
                  width={500}
                  height={200}
                  fill={'#3182bd'}
                  title='Bar Chart'/>;
    
  }
}