import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import IncomeCard2 from './IncomeCard2'
import getUsersIncomes from '../actions/incomes/getUsersIncomes'
import deleteIncome from '../actions/incomes/deleteIncome'
import '../styles/IncomesList.css'

export class IncomesList extends Component {
    componentWillMount() {
        this
            .props
            .getUsersIncomes(this.props.userId)
    }

    deleteIncome(incomeId) {
        this
            .props
            .deleteIncome(incomeId)
    }

    render() {
        if (this.props.incomes.length === 0) {
            return (
                <div className="main-center-4"><Link className="btn yellow-crusta" to='/incomes/add' style={{margin: "13px"}}>Add new income</Link></div>
            )
        }
        let incomes = this
            .props
            .incomes
            .map((income) => <IncomeCard2 key={income.id} income={income} deleteIncome={this.deleteIncome.bind(this)}/>)

        return (

            <div className="main-center-4">
                <Link className="btn yellow-crusta" to='/incomes/add' style={{margin: "13px"}}>Add new income</Link>
                <div className="row">
                    {incomes}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({incomes: state.usersIncomes.data, userId: state.user.id})

const mapDispatchToProps = (dispatch) => {
    return {
        getUsersIncomes: userId => dispatch(getUsersIncomes(userId)),
        deleteIncome: incomeId => dispatch(deleteIncome(incomeId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomesList)