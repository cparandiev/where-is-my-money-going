import React, {Component} from 'react'
import {connect} from 'react-redux';

import AddIncomeForm from '../components/AddIncomeForm'
import addIncome from '../actions/incomes/addIncome'

export class LoginPage extends Component {

    handleSubmit(data) {
        console.log('Submission received!', data);
        this.props.dispatch(addIncome(data)); // clear form
    }

    render() {
        return (
            <div>
                <AddIncomeForm
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}/>
            </div>
        )
    }
}

export default connect()(LoginPage);
