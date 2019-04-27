import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQues } from '../actions/questions'
import { Redirect } from 'react-router-dom'
/**
* @description - NewQuestion component - loads on '/add' route path
* loads a FORM - with two text input fields and a submit button - lets the user create a new poll/question
* ==> user will get re-routed back to the home after the question is successfully created!!
* 
* has a local state - { optionOneText: '', optionOneError: '',
    optionTwoText: '', optionTwoError: '', formValid:false,
    toHome: false
    }
* 
* @method - validateInput(name,value) - validates the inputs
* @method - handleChange(e) - handles the changes for the form, validated the form and fileds, sets the errors if any
* @method - handleSubmit(e) - submits the newly created question BY dispatching 'handleAddQues(optionOneText, optionTwoText)' Handled-ACTION
* @method - render - renders the components
*/
class NewQuestion extends Component {
  state = {
    optionOneText: '', optionOneError: '',
    optionTwoText: '', optionTwoError: '', formValid: false,
    toHome: false
  }

  validateInput = (name, value) => {
    this.setState(() => ({ optionTwoError: '', optionOneError: '' }))
    const reg = /^\s*$/ //no whitespaces
    //console.log(reg.test(value)===true)
    if (value === "") {
      name === "optionOneText"
        ? this.setState(() => ({ optionOneError: "Please fill option one text", optionTwoError: '', formValid: false }))
        : this.setState(() => ({ optionTwoError: "Please fill option two text", optionOneError: '', formValid: false }));

    }
    else if (reg.test(value) === true) {
      name === "optionOneText"
        ? this.setState(() => ({ optionOneError: "Please fill out real data", optionTwoError: '', formValid: false }))
        : this.setState(() => ({ optionTwoError: "Please fill out real data", optionOneError: '', formValid: false }));
    } else if (this.state.optionOneError === "" &&
      this.state.optionTwoError === "" &&
      this.state.optionOneText !== "" && this.state.optionTwoText !== "") {
      this.setState(() => ({ formValid: true }));
    }
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(() => ({
      [name]: value
    }))
    this.validateInput(name, value);
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQues(optionOneText, optionTwoText))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }))
  }

  render() {
    const { optionOneText, optionTwoText, toHome, optionOneError, optionTwoError } = this.state
    const { wyrAuthedUser } = this.props
    if (wyrAuthedUser === null) {
      return <Redirect to='/login' />
    }
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <div className='card'>
            <div className="card-header">
              <h3>Complete the question</h3>
            </div>
            <div className="card-body">

              <form onSubmit={this.handleSubmit}>
                <h5 className='form-group text-info'>Would you rather...?</h5>
                <div className='form-group'>
                  <input type='text' placeholder="Enter option one text here" value={optionOneText}
                    name="optionOneText" onChange={this.handleChange} className='form-control'
                    maxLength={280} />
                  {optionOneError && (<span className='text-danger'>{optionOneError}</span>)}
                </div>
                <div className='form-group'>
                  <input type='text' placeholder="Enter option two text here" value={optionTwoText}
                    name="optionTwoText" onChange={this.handleChange} className='form-control'
                    maxLength={280} />
                  {optionTwoError && (<span className='text-danger'>{optionTwoError}</span>)}
                </div>
                <div className='form-group'>
                  <button className='btn btn-block btn-outline-success' type='submit'
                    disabled={!this.state.formValid}> Submit
                      </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
* @description - mapStateToProps({ wyrAuthedUser }) - REDUX-STORE link 
* Will make { wyrAuthedUser } available as external PROPS for NewQuestion component
*/
function mapStateToProps({ wyrAuthedUser }) {
  return {
    wyrAuthedUser
  }
}

/**
* exporting the "connected" component
* NewQuestion component is now connected to the REDUX-STORE
*/
export default connect(mapStateToProps)(NewQuestion)