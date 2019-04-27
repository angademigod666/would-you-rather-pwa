import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link, withRouter } from 'react-router-dom'

import { formatQuestion } from '../utils/helpers'
import tyler from '../assets/tyler.jpg';
import ryan from '../assets/ryan.jpg';
import michael from '../assets/michael.jpg';

/**
* @description - Question component - CHILD for <Home/> component
* a stateless component which displays polls/questions on the home page
* receives the props - {path, question} from <Home/> component -> question is the passed question object

* FOR prop path="question" -> user can navigate to QuestionDetails where they can answer the poll...
* FOR prop path="viewPoll" -> user can navigate only to the 'ViewPolls' - (as must have already answered the question, and user is not allowed to re-answer a poll)
*/
class Question extends Component {

  render() {
    const { wyrAuthedUser, question, wyrUsers, path } = this.props
    if (wyrAuthedUser === null) {
      return <Redirect to='/login' />
    }
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { author, optionOne, id } = question
    const user = wyrUsers[author]
    const imgURLMod = user.avatarURL === 'tyler.jpg' ? tyler : user.avatarURL === 'ryan.jpg' ? ryan : user.avatarURL === 'michael.jpg' ? michael : null
    return (
      <div className='card'>
        <div className='card-header'>
          <span className="text-info">{author} asks:</span>
        </div>

        <div className='card-body'>

          <div className='row'>
            <div className='col-xs-5 col-sm-3'>
              <img src={imgURLMod}
                alt={`Avatar of author`}
                className='rounded-circle img-fluid'
              />
            </div>

            <div className='col-sm-9'>
              <p>Would you rather?</p>
              <p className="card-text" >{optionOne.text}</p>
              <h2 className="card-text" >OR</h2>
              <div className="card-footer">
                <Link className='card-link' to={`/${path}/${id}`}>
                  View Poll
              			</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


/**
* @description - mapStateToProps({wyrAuthedUser, wyrUsers, questions}, { qid }) - REDUX-STORE link 
* Will make {wyrAuthedUser, wyrUsers, ques } available as external PROPS for Question component
*/
function mapStateToProps({ wyrAuthedUser, wyrUsers, questions }, { qid }) {
  const ques = questions[qid]
  return {
    wyrAuthedUser,
    ques: ques
      ? formatQuestion(ques, wyrUsers[ques.author], wyrAuthedUser)
      : null,
    wyrUsers
  }
}

/**
* exporting the "connected" component
* Question component is now connected to the REDUX-STORE - With a ROUTER!
*/
export default withRouter(connect(mapStateToProps)(Question))