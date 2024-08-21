import { Row, Col } from "react-bootstrap";
import React from "react";
import MessageContainer from "./messageContainer.js"
import SendMessageForm from "./sendMessageForm.js";

const ChatRoom = ({ messages, sendMessage }) => (
  <div>
    <Row className="px-5 py-5">
      <Col sm={12}>
        <h2>Chatroom</h2>
      </Col>
      <Col>

      </Col>
    </Row>
    <Row className="px-5 py-5">
      <Col sm={12}>
        <MessageContainer messages={messages} />
      </Col>
    </Row>
    <Row className="px-5 py-5">
        <Col sm={12}>
            <SendMessageForm sendMessage={sendMessage}/>
        </Col>
    </Row>
  </div>
);

export default ChatRoom;
