/**
* ACTIONs related to WYR_AUTHED_USER
*/
export const SET_WYR_AUTHED_USER = 'SET_WYR_AUTHED_USER'

/**
* @description - ACTION - setWYRAuthedUser(AUTHED_ID_WYR) - {type: SET_WYR_AUTHED_USER, id}
* @param {string} id - user's id
*/
export function setWYRAuthedUser (id) {
  return {
    type: SET_WYR_AUTHED_USER,
    id,
  }
}

/**
* @description - handledAction - handleSetWYRAuthedUser(AUTHED_ID_WYR) 
* - dispatches ACTION - setWYRAuthedUser(AUTHED_ID_WYR)
* @param {string} AUTHED_ID_WYR - user's id
*/
export function handleSetWYRAuthedUser (AUTHED_ID_WYR) {
  return (dispatch) => {
    dispatch(setWYRAuthedUser(AUTHED_ID_WYR))
  }
}