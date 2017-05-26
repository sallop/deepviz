import { combineReducers } from 'redux'
import {
  SET_VALUE_TO_TABLE,
  SET_VALUE_TO_EDITOR
} from '../actions'

import mockData from '../../../data/members.json';

const initialState = {
  editor: {
    id: "",
    group: "",
    name: "",
    pronounce: "",
    spiritualName: "",
    birthday: "",
    telephone: "",
    postcode: "",
    address: "",
    info: "",
  },
  members: mockData
  //members: [mockData]
  //members: [require('../../../data/members.json')]
}


//function setValueToEditor(state = initialState, action){
//function editor(state = initialState, action){
function editor(state = initialState.editor, action){
  let { type, payload } = action
  switch(type) {
    case SET_VALUE_TO_EDITOR:
      console.log(`payload.member = ${JSON.stringify(payload.member)}`)
      console.log(`state = ${JSON.stringify(state)}`)
      return { ...payload.member }
      //return Object.assign({}, state, {
      //  //members: action.member
      //  editor: payload.member
      //})
      //return { ...state, ...newState }
    default:
      console.log(`editors default ${state}`)
      return state
  }
}

function members(state = initialState.members, action){
  let { type, payload } = action

  switch(type) {
    case SET_VALUE_TO_TABLE:
      return { members: payload.members }
      //case "SET_VALUE_TO_TABLE":
      //return Object.assign({}, state, {
      //  //members: action.member
      //  members: payload.members
      //})
    default:
      console.log(`members default ${JSON.stringify(state)}`)
      return state
  }
}

export default combineReducers({
  editor,
  members
  //memberTable,
  //setValueToEditor,
  //setValueToTable
})
