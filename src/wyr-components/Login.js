import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetWYRAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { handleWYRInitialData } from '../actions/shared'

/**
* @description - Login component - loads on '/login' route path
* ==> lets the user select aUser from the existing users --> then let them to 'login' to the app.
* ==> Gets all the exisiting user names from redux-store
*
* has a local state - { selectedUser: object , errorMsg:string , formValid:boolean }
*
* @method - componentDidMount() - gets handleWYRInitialData() from Redux Actions - updated users will be recived from the Redux Store
* @method - handleUserChange(e) - handles the changes in the select user dropdown
* @method - submitSignIn(e) - submits the selected user BY dispatching the 'handleSetWYRAuthedUser(this.state.selectedUser)' Handled-ACTION
* @method - render - renders the components
*/
class Login extends Component {

	state = {
		selectedUser: '', errorMsg: '', formValid: false
	}

	componentDidMount = () => {
		this.props.dispatch(handleWYRInitialData())
	}

	handleUserChange = (e) => {
		const newUser = e.target.value;
		if (newUser !== "") {
			this.setState((curr) => {
				curr.selectedUser = newUser;
				curr.formValid = true;
				curr.errorMsg = '';
				return curr;
			});
		} else {
			this.setState((curr) => ({ formValid: false, errorMsg: "Please select a user!", selectedUser: '' }))
		}
	}

	submitSignIn = (e) => {
		e.preventDefault()
		this.props.dispatch(handleSetWYRAuthedUser(this.state.selectedUser))
	}

	render() {
		const { wyrUsers, wyrAuthedUser } = this.props // all available user IDS

		if (wyrAuthedUser !== null) {
			return <Redirect to='/' />
		}
		return (
			<div className="row">
				<div className="card col-sm-6 offset-sm-3">
				<br/>
					<h1>Please login to continue</h1>
					<h5>Choose a user from the dropdown...</h5>
					<form onSubmit={this.submitSignIn}>
						<div className="form-group">
							<select className="form-control" onChange={this.handleUserChange}>
								<option value={""}>Select a User!!</option>
								{Object.keys(wyrUsers).map(id => (
									<option className="form-control" value={id} key={id}>
										{id}
									</option>)
								)}
							</select>
							{this.state.errorMsg !== '' && (<div className='text-danger'>{this.state.errorMsg}</div>)}
						</div>
						<div className="form-group">
							<button disabled={!this.state.formValid} className={'btn btn-block btn-outline-success'} type="submit">Login!								</button>
						</div>
					</form>
					<br/>
				</div>
			</div>
		)
	}
}


/**
* @description - mapStateToProps({wyrAuthedUser, wyrUsers}) - REDUX-STORE link 
* Will make {wyrAuthedUser, wyrUsers} available as external PROPS for Login component
*/
function mapStateToProps({ wyrAuthedUser, wyrUsers }) {
	return {
		wyrAuthedUser, wyrUsers,
	}
}

/**
* exporting the "connected" component
* Login component is now connected to the REDUX-STORE
*/
export default connect(mapStateToProps)(Login)

