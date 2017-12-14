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
                    <Link className="nav-link was" to='/home'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/contact'>Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/users'>Authentication</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/profile'>My profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/incomes/add'>Incomes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/expenses/add'>Expenses</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/test'>Test</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/test2'>Test2</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/test3'>Test3</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header