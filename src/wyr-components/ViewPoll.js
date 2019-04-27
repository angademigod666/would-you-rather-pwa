import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { handleWYRInitialData } from '../actions/shared'
/**
* @description - ViewPoll component - loads on '/viewPoll/:qid' route path
* displays a table with the overall RESULTS of this poll
* displays details like 
* -> no. of people who voted for option1, and for option2 with their percentages; also shows the user's answer
*
* @method - componentDidMount() - Loads the updated Poll data from the STORE BY dispatching 'handleWYRInitialData()' Handled-ACTION
* @method - render - renders the components
*/
class ViewPoll extends Component {
  componentDidMount() {
    this.props.dispatch(handleWYRInitialData())
  }

  render() {
    const { wyrAuthedUser, wyrUsers, question } = this.props
    if (wyrAuthedUser === null) {
      return <Redirect to='/login' />
    } else {
      const votesOne = question.optionOne.votes.length
      const votesTwo = question.optionTwo.votes.length
      const votesTotal = votesOne - (-votesTwo)
      const authUserAnswer = wyrUsers[wyrAuthedUser].answers[question.id]
      return (
        <div className="row">
          <div className='col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2'>
            {/*<img src={wyrUsers[question.author].avatarURL}
                alt={`Avatar of author`}
                className='avatar'
              />*/}
            <div className='card'>

              <div className="card-body">
                <h4 className="text-info">Overall results: </h4><br />
                <table className='table table-responsive-sm'><tbody>
                  <tr className={authUserAnswer === "optionOne" ? "table-info" : ""}>
                    <th>Would you rather - {question.optionOne.text}? </th>
                    <td>{votesOne} / {votesOne - (-votesTwo)} votes</td>
                    <td>{(votesOne / votesTotal * 100).toString().substr(0, 5)}%</td>
                    {authUserAnswer === "optionOne" ? <th><span className="badge badge-pill badge-success"><h6>Your answer</h6></span></th> : <td></td>}
                  </tr>
                  <tr className={authUserAnswer === "optionTwo" ? "table-info" : ""}>
                    <th>Would you rather - {question.optionTwo.text}? </th>
                    <td>{votesTwo} / {votesOne - (-votesTwo)} votes</td>
                    <td>{(votesTwo / votesTotal * 100).toString().substr(0, 5)}%</td>
                    {authUserAnswer === "optionTwo" ? <th><span className="badge badge-pill badge-success"><h6>Your answer</h6></span></th> : <td></td>}
                  </tr>
                </tbody></table>
              </div>
              <div className="card-footer">
                <h6 className="text-info">Asked by {question.author}</h6>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

/**
* @description - mapStateToProps({ questions, wyrAuthedUser, wyrUsers }, {match}) - REDUX-STORE link 
* Will make { wyrAuthedUser,question,wyrUsers } available as external PROPS for ViewPoll component
*/
function mapStateToProps({ questions, wyrAuthedUser, wyrUsers }, { match }) {
  return {
    wyrAuthedUser,
    question: questions[match.params.qid],
    wyrUsers
  }
}

/**
* exporting the "connected" component
* ViewPoll component is now connected to the REDUX-STORE - With a ROUTER!!
*/
export default withRouter(connect(mapStateToProps)(ViewPoll))  