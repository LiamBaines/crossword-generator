import React from 'react';
import GridRow from './GridRow.js'

function Grid(props) {
  let table = [];
  for (let i = 0; i < props.grid.values.length; i++) {
    table.push(GridRow({
      active: props.active,
      animation:props.animation,
      row: props.grid.values[i],
      loading: props.loading,
      locked: props.locked,
      rowNum: i,
      select: props.select,
      success: props.success
      })
    );
  }
  return (
    <table className="grid">
      {table}
    </table>
  )
}

export default Grid;