import React from 'react'
import styles from '../../styles/App.scss'
import MemberTable from './MemberTable'
import Editor from './Editor'
import Layer from '../components/Layer'

import * as actions from '../actions'
import members from '../../../data/members.json'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'



const App = () => {
  let dots = [0,1,2,3,4,5], onClick = "function"
  return (
  	<div className={styles.app}>
      {/*
  	  <div className={styles.editor}>
  	    <Editor/>
  	  </div>
  	  <div className={styles.memberTable}>
  	    <MemberTable/>
  	  </div>
      */}
      <Layer dots={dots} onClick={onClick} />
  	</div>
  );
}

const mapStateToProps = (state) => ({
  editor : state.editor,
  members: state.members
})

const mapDispatchToProps = dispatch => ({
  onEditor: (member) => {
    dispatch(actions.setValueToEditor(member))
  },
  onTable: (members) => {
    dispatch(actions.setValueToTable(members))
  }
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

//bindActionCreators(actionCreators, dispatch)
// const mapDispatchToProps = dispatch => ({
//  
// //  state => ({ todos: state.todos })
// //  editor: members[0],
// //  members: members
//   //editor: members[0],
//   //members: members
// )(App)

