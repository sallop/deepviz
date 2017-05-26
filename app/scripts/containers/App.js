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
import * as d3 from "d3";


const App = () => {
  var data = [
      {day:'02-11-2016',  count: 180},
      {day:'02-12-2016',  count: 250},
      {day:'02-13-2016',  count: 150},
      {day:'02-14-2016',  count: 496},
      {day:'02-15-2016',  count: 140},
      {day:'02-16-2016',  count: 380},
      {day:'02-17-2016',  count: 100},
      {day:'02-18-2016',  count: 150}
  ];
  var parseDate = d3.time.format("%m-%d-%Y").parse
  data.forEach(function(d){
    d.date = parseDate(d.day)
  })

  let margin = {
    top: 5,
    right: 50,
    bottom: 20,
    left: 50
  }
  //const width = 800, height = 300
  const width = 200, height = 300
  let w = width  - (margin.left + margin.right )
  let h = height - (margin.top  + margin.bottom)

  let x = d3.time.scale()
        .domain(d3.extent(data, function(d){
        console.log(`d.date = ${d.date}`)
          return d.date;
        }))
        .rangeRound([0,w]);

  let ret = d3.extent(data, function(d){
        console.log(`d.date = ${d.date}`)
          return d.date;
        })
  console.log(`ret = ${ret}`)


  let y = d3.scale.linear()
    .domain([0, d3.max(data, function(d){ // set the input domain
      console.log(`d.count = ${d.count}`)
      return d.count;
      //return d.count + 100;
    })])
    .range([h,0]); // set the output range

  return (
  	<div className={styles.app}>
      <Layer data={data} x={x} y={y} />
  	</div>
  );
}

const mapStateToProps = (state) => ({
  editor : state.editor, members: state.members
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

