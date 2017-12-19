import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import ExpenseCard from './ExpenseCard'
import getUsersExpenses from '../actions/expenses/getUsersExpenses'
import deleteExpense from '../actions/expenses/deleteExpense'

export class ExpensesList extends Component {
    componentWillMount() {
        this
            .props
            .getUsersExpenses(this.props.userId)
    }

    deleteExpense(expenseId) {
        this
            .props
            .deleteExpense(expenseId)
    }

    render() {
        if (this.props.expenses.length === 0) {
            return (
                <div className="main-center-4"><Link className="btn yellow-crusta" to='/expenses/add' style={{margin: "13px"}}>Add new expense</Link></div>
            )
        }
        let expenses = this
            .props
            .expenses
            .map((expense) => <ExpenseCard
                key={expense.id}
                expense={expense}
                deleteExpense={this
                .deleteExpense
                .bind(this)}/>)

        return (
            <div className="main-center-4">
                <Link className="btn yellow-crusta" to='/expenses/add' style={{margin: "13px"}}>Add new expense</Link>
                <div className="row">
                    {expenses}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({expenses: state.usersExpenses.data, userId: state.user.id})

const mapDispatchToProps = (dispatch) => {
    return {
        getUsersExpenses: userId => dispatch(getUsersExpenses(userId)),
        deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList)