import React, { useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from 'react-bootstrap/Toast'

const Error = ({open}) => {
  const [show, setShow] = useState(open);

  return (
    <>
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Attention!</strong>
          </Toast.Header>
          <Toast.Body>Something went wrong =(</Toast.Body>
        </Toast>
      </Col>
    </Row>
    </>
  );
}

export default Error;
