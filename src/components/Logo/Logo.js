import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/icons/icon-logo-min.svg';
import './Logo.css';

function Logo(props) {
  return(
    <Link to="/" className="logo link-hover"><img src={logo} alt="Лого" /></Link>
  );
}

export default Logo;