import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

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
                {this.props.redirectToPage && (<Redirect to={this.props.redirectToPage}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({redirectToPage: state.usersExpenses.redirectToPage})

export default connect(mapStateToProps)(AddExpensePage);
