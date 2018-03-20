import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProfilePage extends Component {

  render() {
    return (
      <div className="main-center-5" style={{textAlign: "center"}}>
        <div style={{background: "linear-gradient(#ffffff , #61596d )", padding: "50px 50px 10px 50px", borderRadius: "10px"}}>
          <div className="cool-container"> <p style={{margin: "5px"}}>User id: {this.props.user.id}</p></div>
          <div className="cool-container"> <p style={{margin: "5px"}}>User roles: {this.props.user.roles}</p></div>
          <div className="cool-container"> <p style={{margin: "5px"}}>User name: {this.props.user.username}</p></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfilePage);
