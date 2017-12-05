import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const style = {
  padding: '10px 20px',
  width: 140,
  display: 'block',
  margin: '20px auto',
  fontSize: '16px'
}

const RemoteSubmitButton = ({ dispatch }) =>
  <button
    type="button"
    className="btn btn-primary btn-lg btn-block login-button"
    style={style}
    onClick={() => dispatch(submit('loginSubmit'))}>Login</button>
//                                  ^^^^^^^^^^^^ name of the form

export default connect()(RemoteSubmitButton)