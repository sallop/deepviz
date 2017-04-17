//import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Editor.scss';
import * as constants from '../constants';
//import * as d3 from "d3";

class Dots extends Component {
  render(){
    var _self = this;
    var data = this.props.data.splice(1);
    data.pop();

    var circles = data.map((d,i) =>{
      return (<circle className="dot" r="7"
        cx={_self.props.x(d.date)}
        cy={_self.props.y(d.count)}
        fill="#7dc7f4"
        stroke="#3f5175"
        strokeWidth="5px"
        key={i}
        />)
    });
    return (<g>{circles}</g>)
  }
}

Dots.propTypes = {
  data: PropTypes.array,
    x: PropTypes.func,
    y: PropTypes.func
}

const Layer = ({data, x, y}) => {
  return (
    <div>
      <svg>
        <Dots data={data} x={x} y={y} />
      </svg>
    </div>
  );
}

export default Layer;
