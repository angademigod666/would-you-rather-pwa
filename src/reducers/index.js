/**
* ROOT REDUCERS combining these - wyrAuthedUser, wyrUsers, questions, loadingBarReducer - reducers
* the final state of app = {wyrAuthedUser, wyrUsers, questions, loadingBarReducer}
*/
import { combineReducers } from 'redux'
import wyrAuthedUser from './wyrAuthedUser'
import wyrUsers from './wyrUsers'
import questions from './wyrQuestions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  wyrAuthedUser,
  wyrUsers,
  questions,
  loadingBar: loadingBarReducer
})



