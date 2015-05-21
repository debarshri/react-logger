import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import BarChart from 'react-d3/barchart';

export default class Title extends React.Component {
  render() {
    return (
       <Navbar brand='Logbyte'>
    <Nav>
      <DropdownButton eventKey={3} title='Dashboards'>
        <MenuItem eventKey='1' href='/dashboard/new' >Create a new dashboard</MenuItem>
        <MenuItem eventKey='2' href='/dashboard/list'>See existing dashboards</MenuItem>
        <MenuItem eventKey='3' href='/dashboard/quick'>Edit dashboards</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4' href='/dashboard/explore'>Explore</MenuItem>
      </DropdownButton>
    </Nav>
    <Nav right>
      <NavItem>
          Sign in
      </NavItem>
      <NavItem>
          Sign up
      </NavItem>
    </Nav>
  </Navbar>
    );
  }
}