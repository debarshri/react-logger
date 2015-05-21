import React from 'react';

export default class Data extends React.Component {
  render() {
    return ([
  {
    name: "series1",
    values: [ { x: new Date(), y: 20.5 },{ x: new Date(), y: 4.2 } ]
  },
    {
    name: "series2",
    values: [ { x: new Date(), y: 3.2 },  { x: new Date(), y: 11.2 } ]
  }
]
    );
  }
}

var barData = [
  {label: 'A', value: 5},
  {label: 'B', value: 6},
  {label: 'F', value: 7}
];

var Hello = React.createClass({
    render: function() {
        return <Chart
                  data={barData}
                  width={500}
                  height={200}
                  fill={'#3182bd'}
                  title='Bar Chart'/>;
    }
});