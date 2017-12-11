import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (

    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to='/home'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/contact'>Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/users'>Authentication</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/profile'>My profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/incomes/add'>Incomes</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header