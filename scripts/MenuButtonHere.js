import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class MenuButtonHere extends React.Component {
  render() {
    return (
    <ButtonGroup>
    <DropdownButton bsStyle="success" title="Export">
      <MenuItem key="1" href="/home">Dropdown link</MenuItem>
      <MenuItem key="2">Dropdown link</MenuItem>
    </DropdownButton>
    <Button bsStyle="info">Bookmark</Button>
    <Button bsStyle="info">Right</Button>
  </ButtonGroup>   
   );
  }
}