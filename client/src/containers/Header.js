import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

export class Header extends Component {
  

  render() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{width: '100%'}}>
                <li className="nav-item active">
                    <Link className="nav-link was" to='/home'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link was" to='/contact'>Contact</Link>
                </li>
                {!this.props.userIsAuthenticated &&  
                    <li className="nav-item">
                        <Link className="nav-link was" to='/users'>Authentication</Link>
                    </li>
                }
                {this.props.userIsAuthenticated &&
                    <li className="nav-item">
                        <Link className="nav-link was" to='/profile'>Profile</Link>
                    </li>
                }
                {this.props.userIsAuthenticated &&
                    <li className="nav-item">
                        <Link className="nav-link was" to='/incomes'>Incomes</Link>
                    </li>
                }
                {this.props.userIsAuthenticated &&
                    <li className="nav-item">
                        <Link className="nav-link was" to='/expenses'>Expenses</Link>
                    </li>
                }
                {this.props.userIsAuthenticated &&
                    <li className="nav-item">
                        <Link className="nav-link was" to='/balance'>Balance</Link>
                    </li>
                }
                {this.props.userIsAuthenticated &&
                    <span style={{display:'inline-block', width: '100%'}} /> 
                }
                {this.props.userIsAuthenticated &&
                    <li className="nav-item">
                        <Link className="nav-link was" to='/users/logout'>Logout</Link>
                    </li>
                }
            </ul>
        </div>
        </nav>
    );
  }
}

const mapStateToProps = (state) => ({
    userIsAuthenticated: state.user ? true : false
});


export default connect(mapStateToProps)(Header);
