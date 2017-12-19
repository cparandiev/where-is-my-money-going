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

const RegisterSubmitBtn = ({ dispatch }) =>
  <button
    type="button"
    className="btn yellow-crusta"
    style={style}
    onClick={() => dispatch(submit('registerSubmit'))}>Register</button>
//                                  ^^^^^^^^^^^^ name of the form

export default connect()(RegisterSubmitBtn)