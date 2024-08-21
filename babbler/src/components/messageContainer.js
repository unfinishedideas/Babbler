import React from "react";
import {v4 as uuidv4 } from 'uuid';

const MessageContainer = ({ messages }) => {
  return (
    <div>
      <table className="table table-striped bordered">
        {messages.map((msg, index) => (
          <tbody key={index}>
            <tr>
              <td>
                {msg.username}: {msg.msg}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MessageContainer;