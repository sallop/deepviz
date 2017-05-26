/* action types */
export const SET_VALUE_TO_EDITOR = "SET_VALUE_TO_EDITOR"
export const SET_VALUE_TO_TABLE = "SET_VALUE_TO_TABLE"

/* other constants */
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */
export function setValueToEditor(member) {
  return { 
    type: SET_VALUE_TO_EDITOR,
    payload: { member }
  }
}

export function setValueToTable(members) {
  return { 
    type: SET_VALUE_TO_TABLE,
    payload: { members }
  }
  // error
  //{
  //  type: 'SET_VALUE_TO_TABLE',
  //  payload: new Error(),
  //  error: true
  //}
}
