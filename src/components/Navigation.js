import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to="/" activeClassName="active" exact={true}> Current</NavLink></li>
      <li><NavLink to="/day" activeClassName="active">Daily</NavLink></li>
      <li><NavLink to="/hour" activeClassName="active">Hourly</NavLink></li>
      <li><NavLink to="/charts" activeClassName="active">Charts</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;