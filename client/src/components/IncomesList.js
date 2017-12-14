import React, {Component} from 'react'
import {connect} from 'react-redux'

import IncomeCard2 from './IncomeCard2'
import getUsersIncomes from '../actions/incomes/getUsersIncomes'
import '../styles/IncomesList.css'

export class IncomesList extends Component {
    componentWillMount() {
        this
            .props
            .getUsersIncomes(this.props.userId)
    }

    render() {
        if (this.props.incomes.length === 0) {
            return (
                <div className="main-center-4">Loading...</div>
            )
        }
        let incomes = this
            .props
            .incomes
            .map((income) => <IncomeCard2 key={income.id} income={income}/>)

        return (
            <div className="main-center-4">
                <div className="row">
                    {incomes}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({incomes: state.usersIncomes, userId: state.user.id})

const mapDispatchToProps = (dispatch) => {
    return {
        getUsersIncomes: userId => dispatch(getUsersIncomes(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomesList)