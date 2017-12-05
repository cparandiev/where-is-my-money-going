import React from 'react';
import 'bootstrap-css'
import {Link} from 'react-router-dom'

import '../styles/AuthenticationPage.css'

const AuthenticationPage = (props) => (
  <div className="main-center">
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/users/login'>Login</Link>
        </li>
        <li className="nav-item" style={{
          paddingLeft: '90px'
        }}>
          <Link className="nav-link" to='/users/register'>Register</Link>
        </li>
      </ul>
    </nav>
    {props.children}
  </div>
)

export default AuthenticationPage;
