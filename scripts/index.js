import React from 'react';
import App from './App';
import Title from './Title';
import Navbar from './Navbar';
import MenuButtonHere from './MenuButtonHere';
import LogChart from './LogChart';

React.render(<Title />, document.getElementById('header'));
React.render(<App />, document.getElementById('root'));
React.render(<MenuButtonHere />, document.getElementById('menu-button'));
React.render(<LogChart />, document.getElementById('chart-bar'));
