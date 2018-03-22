import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  PieChart,
  Pie,
  Tooltip
} from 'recharts'

import getUsersBalance from '../actions/balanace/getUsersBalance'
import AreasChart from '../components/AreasChart'
import DateTimeRangeForm from './DateTimeRangeForm'
import addDays from '../utils/common/addDays'
import getStartOfDay from '../utils/common/getStartOfDay'
import getEndOfDay from '../utils/common/getEndOfDay'
import getUsersExpenses from '../actions/expenses/getUsersExpenses'
import getUsersIncomes from '../actions/incomes/getUsersIncomes'

export class BalancePage extends Component {
  //TODO to change the initial date
  componentWillMount() {
    const fromDate = getStartOfDay(addDays(new Date(), -6))
    const toDate = getEndOfDay(new Date())

    this
      .props
      .getUsersBalance(this.props.userId, fromDate, toDate)

    this
      .props
      .getUsersExpenses(this.props.userId, fromDate, toDate)
    
    this
      .props
      .getUsersIncomes(this.props.userId, fromDate, toDate)
  }

  handleSubmit(data) {
    const fromDate = getStartOfDay(data.fromDate)
    const toDate = getEndOfDay(data.toDate)

    this
      .props
      .getUsersBalance(this.props.userId, fromDate, toDate)
    
    this
      .props
      .getUsersExpenses(this.props.userId, fromDate, toDate)
    
    this
      .props
      .getUsersIncomes(this.props.userId, fromDate, toDate)
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

  processBalanceData2(data) {
    let result = []
    let keys = Object.keys(data)

    let startDate = new Date(Math.min(...keys))
    let endDate = new Date(Math.max(...keys))

    for(let i = startDate; i <= endDate; i = addDays(i, 1)){
      if (i === startDate) {
        result.push({
          name: i.toDateString(),
          income: data[i.getTime()].income,
          expense: data[i.getTime()].expense
        })

        continue
      }

      if(!data[i.getTime()]){
        result.push({
          name: i.toDateString(),
          income: result[result.length - 1].income,
          expense: result[result.length - 1].expense
        })

        continue
      }

      result.push({
        name: i.toDateString(),
        income: result[result.length - 1].income + data[i.getTime()].income,
        expense: result[result.length - 1].expense + data[i.getTime()].expense
      })
    }

    return result
  }

  processExpensesData(data){
    const currencyRates = {BGN: 1.95583, EUR: 1, USD: 1.23839 }

    let temp = [],
      result =[]

    for(let i = 0; i < data.length; i+=1){
      temp[data[i].expenseGroup] = temp[data[i].expenseGroup] || 0 + data[i].value / currencyRates[data[i].currency]
    }

    Object.keys(temp).forEach(function(key) {
      result.push({name: key, value: temp[key]})
    })

    return result
  }

  processIncomesData(data){
    let temp = [],
      result =[]

    for(let i = 0; i < data.length; i+=1){
      temp[data[i].incomeGroup] = temp[data[i].incomeGroup] || 0 + data[i].value
    }

    Object.keys(temp).forEach(function(key) {
      result.push({name: key, value: temp[key]})
    })

    return result
  }

  render() {
  //   const data01 = [
  //     {
  //         name: 'Food',
  //         value: 400
  //     }, {
  //         name: 'Bils',
  //         value: 300
  //     }, {
  //         name: 'Coffe',
  //         value: 300
  //     }, {
  //         name: 'Night club',
  //         value: 200
  //     }, {
  //         name: 'Car fuel',
  //         value: 278
  //     }, {
  //         name: 'Clothes',
  //         value: 189
  //     }
  // ]
    const processedBalance = this.processBalanceData2(this.props.balance)
    const processedExpenses = this.processExpensesData(this.props.expenses)
    const processedIncomes = this.processIncomesData(this.props.incomes)

    return (
      <div>
        <div className='row x-margin-top'>
          <div className='col-md-2'/>
          <div className='col-md-2'>
            <DateTimeRangeForm onSubmit={this.handleSubmit.bind(this)}/>
          </div>
          <div>
            <AreasChart balance={processedBalance} title="Expenses and Incomes"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2'/> 
          <PieChart width={1200} height={400}>
            <text
                x={300}
                y={390}
                textAnchor="middle"
                fontFamily="Roboto"
                dominantBaseline="middle"
                fill="white"
                fontSize="25px">
                Top expenses
            </text>
            <Pie
                dataKey="value"
                data={processedExpenses}
                cx={300}
                cy={200}
                innerRadius={100}
                outerRadius={140}
                fill="#82ca9d"
                isAnimationActive={true}/>
                {/* label={< CustomizedLabel fill = "#8884d8" />}/> */}
              <Pie
                dataKey="value"
                data={processedExpenses}
                cx={300}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                isAnimationActive={true}/>
                <text
                    x={1000}
                    y={390}
                    textAnchor="middle"
                    fontFamily="Roboto"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="25px">
                    Budget source
                </text>
                <Pie
                    dataKey="value"
                    data={processedIncomes}
                    cx={1000}
                    cy={200}
                    innerRadius={100}
                    outerRadius={140}
                    isAnimationActive={true}
                    fill="#8884d8"/>
                <Pie
                    dataKey="value"
                    data={processedIncomes}
                    cx={1000}
                    cy={200}
                    outerRadius={80}
                    fill="#82ca9d"
                    isAnimationActive={true}/>
              <Tooltip
                  formatter={(value) => {
                  return `${value} €`
              }}/>
          </PieChart>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({balance: state.usersBalance, userId: state.user.id,
  expenses: state.usersExpenses.data, incomes: state.usersIncomes.data})

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersBalance: (userId, from, to) => dispatch(getUsersBalance(userId, from, to)),
    getUsersExpenses: (userId, from, to) => dispatch(getUsersExpenses(userId, from, to)),
    getUsersIncomes: (userId, from, to) => dispatch(getUsersIncomes(userId, from, to))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalancePage)
