/**
* REDUCERS related to authenticated users
*/
import { SET_WYR_AUTHED_USER } from '../actions/authedUser'


/**
* authedUser - REDUCER
* returns state - {} -- WHEN ACTION --> No action
* returns state - {wyrAuthedUser} -- WHEN ACTION --> SET_WYR_AUTHED_USER
*/
export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_WYR_AUTHED_USER :
      return action.id
    default :
      return state
  }
}