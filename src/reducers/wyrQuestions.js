/**
* REDUCERS related to questions
*/
import { RECEIVE_QUESTIONS, SAVE_QUES, SAVE_ANSWER } from '../actions/questions'



/**
* users - REDUCER
* returns state - {} -- WHEN ACTION --> No action
* returns state - {questions}(all questions) -- WHEN ACTION --> RECEIVE_QUESTIONS
* returns state - {questions}(all questions, with newly added question) -- WHEN ACTION --> SAVE_QUES
* returns state - {questions}(all questions, with newly added answer to question) -- WHEN ACTION --> SAVE_ANSWER
*/
export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SAVE_ANSWER :
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer] : { 
            ...state[action.qid][action.answer], 
            votes: state[action.qid][action.answer].votes.concat([action.wyrAuthedUser]) 
          }
        }
      }
    case SAVE_QUES :
      return {
        ...state,
        [action.question.id]: action.question
      }
    default :
      return state
  }
}
