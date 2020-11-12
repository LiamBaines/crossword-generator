import React from 'react';

function Buttons(props) {
  return (
    <div className="nav">
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={props.generate}>New crossword</button>
              <button onClick={props.check}>Check</button>
              <button onClick={props.reveal}>I give up!</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
 }

export default Buttons;