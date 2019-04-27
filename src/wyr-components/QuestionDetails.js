import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/questions'
import { Redirect, withRouter } from 'react-router-dom'
import { handleWYRInitialData } from '../actions/shared'

import tyler from '../assets/tyler.jpg';
import ryan from '../assets/ryan.jpg';
import michael from '../assets/michael.jpg';

/**
* @description - QuestionDetails component - loads on '/question/:qid' route path
* loads a FORM - with two radio input fields and a submit button
* lets the user to Answer someones' poll/question
* ==> user will get re-routed to the '/viewPoll/:qid' page, after question is successfully answered!!
* 
* has a local state - { answer: string , toViewPoll: boolean }
*
* @method - handleChange(e) - handles the changes when user selects or toggles b/w radio buttons for the Answer
* @method - handleSubmit(e) - submits user's Answer BY dispatching 'handleAddAnswer({qId, authedUser, answer})' Handled-ACTION
* @method - render - renders the components
*/
class QuestionDetails extends Component {
  state = {
    answer: 'optionTwo',
    toViewPoll: false
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.setState((curr) => {
      curr.answer = value;
      return curr;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, question, wyrAuthedUser } = this.props
    dispatch(handleAddAnswer({
      qid: question.id,
      answer: this.state.answer,
      wyrAuthedUser
    }));
    this.setState({ toViewPoll: true });
    this.props.dispatch(handleWYRInitialData());
  }


  render() {
    const { wyrUsers, wyrAuthedUser, question } = this.props
    if (wyrAuthedUser === null) {
      return <Redirect to='/login' />
    }
    if (this.state.toViewPoll === true) {
      return <Redirect to={`/viewPoll/${question.id}`} />
    }
    const user = wyrUsers[question.author]
    const imgURLMod = user.avatarURL === 'tyler.jpg' ? tyler : user.avatarURL === 'ryan.jpg' ? ryan : user.avatarURL === 'michael.jpg' ? michael : null
    return (
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>

          <div className='card'>
            <div className='card-header'>
              <h4>{question.author} asks:</h4>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-sm-2'>

                  <img src={imgURLMod}
                    alt={`Avatar of author`}
                    className='rounded-circle img-fluid' />
                </div>
                <div className='col-sm-10'>
                  <form className='form' onSubmit={this.handleSubmit}>
                    <h4 className="form-group">Would you rather be...</h4>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" checked={this.state.answer === "optionOne"}
                            type="radio" name={"answer"} value={"optionOne"} onChange={this.handleChange} />
                          {question.optionOne.text}
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" checked={this.state.answer === "optionTwo"}
                            type="radio" name={"answer"} value={"optionTwo"} onChange={this.handleChange} />
                          {question.optionTwo.text}
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className='btn btn-block btn-outline-success' type='submit'
                        disabled={question.optionOne.text === '' && question.optionTwo.text === ''}>Submit Answer
                        </button>
                    </div>
                  </form>


                </div>
              </div>
            </div>



          </div>



        </div>
      </div>
    )
  }
}

/**
* @description - mapStateToProps({ wyrUsers, questions, wyrAuthedUser }) - REDUX-STORE link 
* Will make { wyrUsers, question , wyrAuthedUser } available as external PROPS for QuestionDetails component
*/
function mapStateToProps({ wyrUsers, questions, wyrAuthedUser }, { match }) {
  return {
    wyrUsers,
    wyrAuthedUser,
    question: questions[match.params.qid]
  }
}

/**
* exporting the "connected" component
* QuestionDetails component is now connected to the REDUX-STORE - With a ROUTER
*/
export default withRouter(connect(mapStateToProps)(QuestionDetails))