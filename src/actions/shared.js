/**
* Shared handleWYRInitialData() - between users, questions, authed_user
*/

import { getWYRInitialData } from '../utils/api'
import { receiveWYRUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

//const AUTHED_ID_WYR = 'tylermcginnis'

/**
* @description - handledAction - handleWYRInitialData() 
* -> dispatches ACTION - showLoading()
* -> getWYRInitialData() backend call
* -> dispatches ACTION - receiveWYRUsers(users)
* -> dispatches ACTION - receiveQuestions(questions) 
* -> dispatches ACTION - hideLoading(ques)
*/


export function handleWYRInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getWYRInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveWYRUsers(users))
        dispatch(receiveQuestions(questions))
        //dispatch(setWYRAuthedUser(AUTHED_ID_WYR))
        dispatch(hideLoading())
      })
  }
}

