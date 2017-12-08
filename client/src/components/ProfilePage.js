import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ProfilePage extends Component {

  render() {
    return (
      <div>
        <p>User id: {this.props.user.id}</p>
        <p>User roles: {this.props.user.roles}</p>
        <p>User name: {this.props.user.username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(ProfilePage)
