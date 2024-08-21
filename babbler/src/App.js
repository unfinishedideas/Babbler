import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import WaitingRoom from "./components/waitingRoom";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

function App() {
  const [conn, setConnection] = useState();

  const joinChatRoom = async (username, chatRoom) => {
    console.log(`Username: ${username}, ChatRoom: ${chatRoom}`)
    try {
      // initiate a connection (URL is where server is hosted)
      const conn = new HubConnectionBuilder()
        .withUrl("http://localhost:5134/chat")
        .configureLogging(LogLevel.Information)
        .build();

      // setup handler
      conn.on("JoinSpecificChatRoom", (username, msg) => {
        console.log(`user: ${username}, msg: ${msg}`);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatroom", {username, chatRoom});

      setConnection(conn);

    } catch (e) {
      console.error(`ERR joinChatroom: ${e}`);
    }
  };

  return (
    <div>
      <main>
        <Container>
          <Row className="px-5 my-5">
            <Col sm="12">
              <h1 className="font-weight-light">Babbler Chat App</h1>
              <WaitingRoom joinChatroom={joinChatRoom}></WaitingRoom>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
