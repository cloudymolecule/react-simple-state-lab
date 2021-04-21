import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

let retVals = () => {
  const thing = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  const otherThing = [thing, thing, thing, thing, thing, thing, thing, thing, thing, thing]
  return otherThing
}

Matrix.defaultProps = {
  values: retVals()
}
