import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Header extends Component {
  render() {
    return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
        <NavLink to="/student/jim smith" >
          Student: Jim Smith
        </NavLink>
      </li>
        <li>
          <NavLink to="/student/jane smith/50001">Student: Jane Smith, Student No:50001</NavLink>
        </li>
      </ul>
    </div>
    )}
}

export default Header;
