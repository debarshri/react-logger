import React from 'react';
import Chart from 'react-d3/barchart';

export default class LogChart extends React.Component {
  render() {
    return (
      <Chart data={barData}
                  width={500}
                  height={200}
                  fill={'#3182bd'}
                  title='Bar Chart'/>
    );
  }
}

	var barData = React.createClass({displayName: 'barData',
	  render: function() {
	    return (
	      React.DOM.div({className: "commentBox"}, 
	        "Hello, world! I am a CommentBox."
	      )
	    );
	  }
	});