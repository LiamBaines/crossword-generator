import React from 'react';

function Buttons(props) {
  return (
    <div className="nav">
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={props.generate}>New Crossword</button>
              <button onClick={props.check}>Check</button>
              <button onClick={props.reveal}>I Give Up!</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
 }

export default Buttons;