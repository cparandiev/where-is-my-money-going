import React, {Component} from 'react'
import {connect} from 'react-redux'

import getUsersBalance from '../actions/balanace/getUsersBalance'
import AreasChart from '../components/AreasChart'

export class BalancePage extends Component {
  //TODO to change the initial date
  componentWillMount() {
    this
      .props
      .getUsersBalance(this.props.userId, new Date('2018-12-08T12:24:03.859Z'), new Date('2018-12-12T12:24:03.859Z'))
  }

  processBalanceData(data){
    let result = []
    let keys = Object.keys(data)

    for(var i = 0 ; i < keys.length; i+=1){
      let key = keys[i]

      if(i === 0){
        result.push({
          name: new Date(+key).toDateString(),
          income: data[key].income,
          expense: data[key].expense
        })
        continue
      }

      result.push({
        name: new Date(+key).toDateString(),
        income: result[i-1].income + data[key].income,
        expense: result[i-1].expense + data[key].expense
      })
    }

    return result
  }

  render() {
    const processedBalance = this.processBalanceData(this.props.balance)

    return (
      <div>
        <AreasChart balance={processedBalance}/>
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
