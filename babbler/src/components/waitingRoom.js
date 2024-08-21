import React from "react";
import { useState } from "react";
import {Button, Col, Row, Form } from "react-bootstrap";

const WaitingRoom = ({ joinChatroom }) => {
  const [username, setUsername] = useState();
  const [chatroom, setChatroom] = useState();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        joinChatroom(username, chatroom);   // this func is passed in by App.js        
      }}
    >
      <Row className="px-5 py-5">
        <Col sm={12}>
          <Form.Group>
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control
              placeholder="ChatRoom"
              onChange={(e) => setChatroom(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col sm={12}>
            <hr/>
            <Button variant="Success" type="Submit">Join</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default WaitingRoom;
