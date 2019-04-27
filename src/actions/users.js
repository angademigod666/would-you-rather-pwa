/**
* ACTIONs related to all users in app
*/


export const RECEIVE_WYR_USERS = 'RECEIVE_WYR_USERS'

/**
* @description - ACTION - receiveWYRUsers(users)
* @param {object} users - all the users for the app
*/
export function receiveWYRUsers (users) {
  return {
    type: RECEIVE_WYR_USERS,
    users,
  }
}