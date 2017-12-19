import React, {Component} from 'react'
import {connect} from 'react-redux'

import getUsersBalance from '../actions/balanace/getUsersBalance'
import AreasChart from '../components/AreasChart'
import DateTimeRangeForm from './DateTimeRangeForm'
import addDays from '../utils/common/addDays'
import getStartOfDay from '../utils/common/getStartOfDay'
import getEndOfDay from '../utils/common/getEndOfDay'

export class BalancePage extends Component {
  //TODO to change the initial date
  componentWillMount() {
    const fromDate = getStartOfDay(addDays(new Date(), -6))
    const toDate = getEndOfDay(new Date())

    this
      .props
      .getUsersBalance(this.props.userId, fromDate, toDate)
  }

  handleSubmit(data) {
    const fromDate = getStartOfDay(data.fromDate)
    const toDate = getEndOfDay(data.toDate)

    this
      .props
      .getUsersBalance(this.props.userId, fromDate, toDate)
  }

  processBalanceData(data) {
    let result = []
    let keys = Object.keys(data)

    for (var i = 0; i < keys.length; i += 1) {
      let key = keys[i]

      if (i === 0) {
        result.push({
          name: new Date(+ key).toDateString(),
          income: data[key].income,
          expense: data[key].expense
        })
        continue
      }

      result.push({
        name: new Date(+ key).toDateString(),
        income: result[i - 1].income + data[key].income,
        expense: result[i - 1].expense + data[key].expense
      })
    }

    return result
  }

  render() {
    const processedBalance = this.processBalanceData(this.props.balance)

    return (
      <div className='row'>
        <div className='col-md-2'/>
        <div className='col-md-2'>
          <DateTimeRangeForm onSubmit={this.handleSubmit.bind(this)}/>
        </div>
        <div>
          <AreasChart balance={processedBalance} title="Expenses and Incomes"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({balance: state.usersBalance, userId: state.user.id})

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersBalance: (userId, from, to) => dispatch(getUsersBalance(userId, from, to))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalancePage)
