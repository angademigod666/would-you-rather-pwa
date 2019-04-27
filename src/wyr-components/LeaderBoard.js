import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
import { handleWYRInitialData } from '../actions/shared'
import User from './User'

/**
* @description - LeaderBoard component loads on '/leaderboard' route path
* loads the -- <User/> components as CHILD for all the users in the app
* ==> Filters all exisitng users based their decreasing value of SCORE. 
* ==> SCORE = noOfAnsweredQuestions + noOfQuestionsAsked
* ==> Passes PROPS - userId to <User/> 
*
* @method - componentDidMount - gets handleWYRInitialData() from Redux Actions - will help fetch the latest results in the Redux Store
* @method - render - renders the components 
*/


class LeaderBoard extends Component {

  componentDidMount() {
    this.props.dispatch(handleWYRInitialData())
  }


  render() {
    const { wyrAuthedUser, wyrUsers, uIds } = this.props
    if (wyrAuthedUser === null) {
      return <Redirect to='/login' />
    }


    return (
      <div className='row'>
        <div className='col-sm-6 offset-sm-3'>
          <h1 className="text-center">The Leaderboard</h1>

          <ul className='dashboard-list'>
            {/* uIds.map(id=>console.log(wyrUsers[id])) */}
            {uIds.map((id) => <li key={id}><User user={wyrUsers[id]} /></li>)}
          </ul>
        </div>
      </div>
    )
  }
}


/**
* @description - mapStateToProps({wyrAuthedUser, wyrUsers, questions }) - REDUX-STORE link 
*
* Will make { wyrAuthedUser, wyrUsers, uIds } available as external PROPS for LeaderBoard component
*/
function mapStateToProps({ wyrAuthedUser, wyrUsers, questions }) {

  let uIds = Object.keys(wyrUsers)
    .sort((a, b) => (Object.keys(wyrUsers[b].answers).length + wyrUsers[b].questions.length) - (Object.keys(wyrUsers[a].answers).length + wyrUsers[a].questions.length));

  return {
    wyrAuthedUser,
    uIds,
    wyrUsers
  }
}

/**
* exporting the "connected" component
* LeaderBoard component is now connected to the REDUX-STORE
*/
export default connect(mapStateToProps)(LeaderBoard)