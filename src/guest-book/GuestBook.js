import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import GuestBookTable from "./TableGuestBook";
import GuestBookForm from "./FormGuestBook";
import { Routes, Route } from "react-router-dom";
import BerandaGuestBook from "./BerandaGuestBook";

class GuestBook extends Component {
  render() {
    return (
      <Container>
        <Row style={{ margin: 0 }}>
          <Col sm="10">
            <Routes>
              <Route exact path={"/"} element={<BerandaGuestBook />} />
              <Route path={"/form"} element={<GuestBookForm />} />
              <Route path={"/table"} element={<GuestBookTable/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GuestBook;
