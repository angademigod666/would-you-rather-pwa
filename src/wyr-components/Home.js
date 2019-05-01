import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Redirect } from 'react-router-dom'

/**
* @description -- Home component - loads on '/' route path
* loads the -- <Question/> component for all the questions in the app
* ==> Filters questions based on Answered/UnAnswered wrt the logged in user
* ==> Passes props - path, question to <Question/> 
* path="question" for UnAnswered and path="viewPoll" for Answered questions
*
* has a local state - { order:array, showUnAnswered:boolean }
*
* @method - handleShow - handles user's toggle b/w answered and unAnswered questions
* @method - render - renders the components 
*/

class Home extends Component {

  state = {
    order: [],
    showUnAnswered: true
  };


  handleShow = () => {
    this.setState((curr) => {
      curr.showUnAnswered === true ? curr.showUnAnswered = false : curr.showUnAnswered = true;
      //curr.order = newly;
      return curr;
    });
  };
  render() {

    const { questionIds, questions, wyrAuthedUser } = this.props;

    if (wyrAuthedUser === null) {
      return <Redirect to='/login' />
    }

    const { showUnAnswered } = this.state;
    return (
      <div className="row">
        <div className='col-sm-8 offset-sm-2'>
        <h3 className='tres-2'><span>WOULD YOU RATHER?</span></h3>
          <br/>
          <div className="wrapper">
          <button className='buttonAns' onClick={this.handleShow}>
          
          {showUnAnswered === true ? 'Show my answers' : 'Answer more?'}
          
          </button> 
          </div> &nbsp;&nbsp;
  
         <ul>
            {this.state.showUnAnswered === true ? questionIds.map((quesId) => ((!questions[quesId].optionOne.votes.includes(wyrAuthedUser) && !questions[quesId].optionTwo.votes.includes(wyrAuthedUser)) && (
              <li key={quesId}>
                <Question path="question" question={questions[quesId]} />
              </li>
            ))) : null}
          </ul>
          <ul>
            {this.state.showUnAnswered === false ? questionIds.map((quesId) => (((questions[quesId].optionOne.votes.includes(wyrAuthedUser) ||
              questions[quesId].optionTwo.votes.includes(wyrAuthedUser))) && (
                <li key={quesId}>
                  <Question path="viewPoll" question={questions[quesId]} />
                </li>
              ))) : null}
          </ul>
        </div>
      </div>
    )
  }
}


/**
* @description - mapStateToProps({ questions, wyrAuthedUser}) - REDUX-STORE link 
* Will make { questions, wyrAuthedUser, questionIds } available as external PROPS for Home component
*/

function mapStateToProps({ questions, wyrAuthedUser }) {
  let qIds = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    wyrAuthedUser,
    questionIds: qIds,
    questions
  }
}
/**
* exporting the "connected" component
* Home component is now connected to the REDUX-STORE
*/
export default connect(mapStateToProps)(Home)