import React, {Component} from 'react'
import {connect} from 'react-redux'

import selectIncome from '../actions/incomes/selectIncome'

export class IncomeDetails extends Component {
  componentWillMount() {
    this
      .props
      .selectIncome(this.props.match.params.incomeId)
  }

  render() {
    return (
      <div
        className="card"
        style={{
        width: "50rem"
      }}
        className="main-center-3">
        <img className="card-img-top" src={this.props.photoPath} alt="Income"/>
        {/* <img
          className="card-img-top"
          src="https://cdn.vertex42.com/ExcelTemplates/Images/income-statement_screenshot.gif"
          alt="Income"/> */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p className="card-text">
              <strong>Description:</strong>
              <br/>&emsp; {this.props.description}
            </p>
          </li>
          <li className="list-group-item"><strong>Value:</strong> {this.props.value} {this.props.currency}</li>
          <li className="list-group-item"><strong>Created on:</strong> {this.props.created}</li>
          <li className="list-group-item"><strong>Group:</strong> {this.props.incomeGroup}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  id: state.activeIncome.id,
  value: state.activeIncome.value,
  userId: state.activeIncome.userId,
  description: state.activeIncome.description,
  currency: state.activeIncome.currency,
  created: state.activeIncome.created,
  incomeGroup: state.activeIncome.incomeGroup,
  photoPath: state.activeIncome.photoPath
})

const mapDispatchToProps = (dispatch) => {
  return {
    selectIncome: incomeId => dispatch(selectIncome(incomeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeDetails)
