/**
* REDUCERS related to all users of the app
*/
import { RECEIVE_WYR_USERS } from '../actions/users'


/**
* users - REDUCER
* returns state - {} -- WHEN ACTION --> No action
* returns state - {wyrUsers} -- WHEN ACTION --> RECEIVE_WYR_USERS
*/
export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_WYR_USERS :
      return {
        ...state,
        ...action.users
      }
    default :
      return state
  }
}