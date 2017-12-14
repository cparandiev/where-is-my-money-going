import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import getCurrencySymbols from '../utils/common/getCurrencySymbols'

export class ExpenseCard extends Component {
    deleteExpense() {
        this
            .props
            .deleteExpense(this.props.expense.id)
    }

    render() {
        let expense = this.props.expense
        let creationDateAndTime = new Date(expense.created)
        let creationTime = creationDateAndTime.toLocaleTimeString()
        let creationDate = creationDateAndTime.toLocaleDateString()
        let currencySymbol = getCurrencySymbols(expense.currency)

        return (
            <div className="col-md-3">
                <div className="col-md-12">
                    <div className="pricing hover-effect">
                        <div className="pricing-head">
                            <h3>{expense.expenseGroup}
                                <span>
                                    {creationDate}
                                </span>
                                <span>
                                    {creationTime}
                                </span>
                            </h3>
                            <h4>
                                <i>{currencySymbol}</i>{parseInt(expense.value)}
                                <i>.{parseInt(expense.value * 100 - parseInt(expense.value) * 100)}</i>
                            </h4>
                        </div>
                        <ul className="pricing-content list-unstyled">
                            <li>
                                <span className='was-2'>Description:
                                </span>
                                {expense
                                    .description
                                    .substring(0, 16) + '...'}
                            </li>
                        </ul>
                        <div className="pricing-footer">
                            <Link className="btn yellow-crusta" to={`/expenses/${expense.id}`}>Details</Link>
                            <button
                                onClick={this
                                .deleteExpense
                                .bind(this)}
                                className="btn red-crusta"
                                style={{
                                marginLeft: "20px"
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseCard
