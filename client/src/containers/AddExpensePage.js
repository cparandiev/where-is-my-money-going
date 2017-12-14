import React, {Component} from 'react'
import {connect} from 'react-redux';

import AddExpenseForm from './Expenses/AddExpenseForm'
import addExpense from '../actions/expenses/addExpense'

export class AddExpensePage extends Component {

    handleSubmit(data) {
        console.log('Submission received!', data);
        this.props.dispatch(addExpense(data)); // clear form
    }

    render() {
        return (
            <div>
                <AddExpenseForm
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}/>
            </div>
        )
    }
}

export default connect()(AddExpensePage);
