import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";


function BerandaGuestBook() {
    return (
      <Fragment>
        <h1>Guest Book Dashboard</h1>
        <div>
          <Col>
          <Link to="/table">
          <Button  style={{width : 200}} color="warning" >Guest List Table</Button>
          </Link>
          <Link to="/form">
          <Button style={{ marginLeft: "15px" , width : 200 }} color="warning">Guest Form</Button>
        </Link>
                  </Col>
        </div>
      </Fragment>
    );
}

export default BerandaGuestBook;