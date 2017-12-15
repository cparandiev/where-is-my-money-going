import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import AddIncomeForm from '../components/AddIncomeForm'
import addIncome from '../actions/incomes/addIncome'

export class AddIncomePage extends Component {

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
                {this.props.redirectToPage && (<Redirect to={this.props.redirectToPage}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({redirectToPage: state.usersIncomes.redirectToPage})

export default connect(mapStateToProps)(AddIncomePage);
