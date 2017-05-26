import React from 'react';
//import styles from '../../styles/App.scss';
import styles from '../../styles/MemberTable.scss';
import * as constants from '../constants';


//const MemberTable = (members) => {
const MemberTable = ({members, onClick}) => {
  var tags = [];
  var columns = [];
  Object.keys(constants.MEMBER).map((k,idx) => {
    columns.push(<td key={idx}>{constants.MEMBER[k]}</td>)
  })
  //onClick={ () => console.log(`idx=${idx} member=${JSON.stringify(member)}
  //onClick={ () => console.log(`idx=${idx} other option`) }
  members.forEach((member)=>{
    tags.push(
      <tr key={member.id}>
        {
          Object.keys(member).map((k,idx)=>{
            if (0 == idx) {
              return <td key={idx} value={idx}
                          onClick={()=>{onClick(member)}}>
                         {member[k]}
                     </td>
            } else {
              return <td key={idx} value={idx}
                        onClick={()=>console.log(`idx = ${idx}`)}>
                        {member[k]}
                     </td>
            }
          })
        }
      </tr>
    )});

  return (
  <table>
    <thead>
      <tr>{columns}</tr>
    </thead>
    <tbody>
      {tags}
    </tbody>
  </table>
  );
}

export default MemberTable;
