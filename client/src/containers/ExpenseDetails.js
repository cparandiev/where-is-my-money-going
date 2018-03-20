import React, {Component} from 'react';
import {connect} from 'react-redux';

import selectExpense from '../actions/expenses/selectExpense';

export class ExpenseDetails extends Component {
  componentWillMount() {
    const id = this.props.match.params.expenseId;
    this
      .props
      .selectExpense(id);
  }

  render() {
    return (
      <div
          className="card"
          style={{
        width: "50rem"
      }}
          className="main-center-3"
      >
        <div className="b-container">
        <img className="x-card-img-top" src={this.props.photoPath} alt="Expense"  style={{height: "500px"}}/>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p className="card-text">
              <strong>Description:</strong>
              <br/>&emsp; {this.props.description}
            </p>
          </li>
          <li className="list-group-item"><strong>Value:</strong> {this.props.value} {this.props.currency}</li>
          <li className="list-group-item"><strong>Created on:</strong> {this.props.created}</li>
          <li className="list-group-item"><strong>Group:</strong> {this.props.expenseGroup}</li>
        </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.activeExpense.id,
  value: state.activeExpense.value,
  userId: state.activeExpense.userId,
  description: state.activeExpense.description,
  currency: state.activeExpense.currency,
  created: state.activeExpense.created,
  expenseGroup: state.activeExpense.expenseGroup,
  photoPath: state.activeExpense.photoPath
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectExpense: expenseId => dispatch(selectExpense(expenseId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetails);
