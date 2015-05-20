import React from 'react';
import App from './App';
import Title from './Title';
import Navbar from './Navbar';
import LogChart from './LogChart';

React.render(<Title />, document.getElementById('header'));
React.render(<App />, document.getElementById('root'));
React.render(<Navbar />, document.getElementById('nav-bar'));
React.render(<LogChart />, document.getElementById('chart-bar'));