import React, { Component } from 'react'
import { connect } from 'react-redux'
import logoutUser from '../actions/users/logoutUser'

export class Logout extends Component {
    componentWillMount(){
        this.props.logout()
    }

    render() {
        return (
        <div />
        )
    }
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
