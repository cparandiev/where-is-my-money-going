import React from 'react'
import {Link} from 'react-router-dom'

import getCurrencySymbols from '../utils/common/getCurrencySymbols'

function IncomeCard2(props) {
    let creationDateAndTime = new Date(props.income.created)
    let creationTime = creationDateAndTime.toLocaleTimeString()
    let creationDate = creationDateAndTime.toLocaleDateString()
    let currencySymbol = getCurrencySymbols(props.income.currency)
    const deleteIncome = () => {
        props.deleteIncome(props.income.id)
    }

    return (
        <div className="col-md-3">
            <div className="col-md-12">
                <div className="pricing hover-effect">
                    <div className="pricing-head">
                        <h3>{props.income.incomeGroup}
                            <span>
                                {creationDate}
                            </span>
                            <span>
                                {creationTime}
                            </span>
                        </h3>
                        <h4>
                            <i>{currencySymbol}</i>{parseInt(props.income.value)}
                            <i>.{parseInt(props.income.value * 100 - parseInt(props.income.value) * 100)}</i>
                        </h4>
                    </div>
                    <ul className="pricing-content list-unstyled">
                        <li>
                            <span className='was-2'>Description:
                            </span>
                            {props
                                .income
                                .description
                                .substring(0, 16) + '...'}
                        </li>
                    </ul>
                    <div className="pricing-footer">
                        <Link className="btn yellow-crusta" to={`/incomes/${props.income.id}`}>Details</Link>
                        {/* <Link
                            className="btn red-crusta"
                            style={{
                            marginLeft: "20px"
                        }}
                            to={`/incomes/${props.income.id}/delete`}>Delete</Link> */}
                        <button
                            onClick={deleteIncome}
                            className="btn red-crusta"
                            style={{
                            marginLeft: "20px"
                        }}>Delete</button>

                        {/* <a href="javascript:;" className="btn yellow-crusta">
                            Details
                        </a>
                        <a href="javascript:;" className="btn red-crusta" style={{marginLeft: "20px"}}>
                            Delete
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeCard2
