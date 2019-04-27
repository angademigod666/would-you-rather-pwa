/**
* ACTIONs related to questions
*/

import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUES = 'SAVE_QUES'
export const SAVE_ANSWER = 'SAVE_ANSWER'


/**
* @description - ACTION - receiveQuestions(questions)
* @param {object} questions - all the questions
*/
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

/**
* @description - ACTION - addQues(question)
* @param {object} question - a new question to be added
*/
function addQues (question) {
  return {
    type: SAVE_QUES,
    question,
  }
}


/**
* @description - handledAction - handleAddQues(optionOneText,optionTwoText) 
* -> dispatches ACTION - showLoading()
* -> saveQuestion({ author: wyrAuthedUser, optionOneText, optionTwoText }) backend call
* -> dispatches ACTION - addQues(ques) 
* -> dispatches ACTION - hideLoading(ques)
* @param {string} optionOneText - Option one's user input
* @param {string} optionTwoText - Option two's user input
*/
export function handleAddQues ( optionOneText, optionTwoText ) {
  return (dispatch, getState) => {
    const { wyrAuthedUser } = getState()
    console.log(wyrAuthedUser);
    dispatch(showLoading())
    console.log("YAY",optionOneText,optionTwoText)
    return saveQuestion({
      author: wyrAuthedUser,
      optionOneText,
      optionTwoText
    })
      .then((ques) =>{console.log('666--->>>',ques) ;dispatch(addQues(ques)); })
      .then(() => dispatch(hideLoading()))
  }
}


// SAVE_ANSWER { authedUser, qid, answer }

/**
* @description - ACTION - setWYRAuthedUser(AUTHED_ID_WYR)
* @param { {wyrAuthedUser,qid,answer} } - all the answer reated data
*/

function addAnswer ({ wyrAuthedUser , qid, answer}) {
  return {
    type: SAVE_ANSWER,
    wyrAuthedUser,
    qid,
    answer
  }
}


/**
* @description - handledAction - handleAddAnswer(info) 
* - dispatches ACTION - addAnswer(info) 
* -> saveQuestionAnswer(info) backend call 
* @param {string} info
*/

export function handleAddAnswer (info) {
  return (dispatch) => {
    dispatch(addAnswer(info))
    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAddAnswer: ', e)
        //TODO: dispatch(undoAddAnswer(info))
        alert('The was an error answering that question. Try again.')
      })
  }
}