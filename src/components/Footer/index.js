import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const products = ["Consumers", "Business", "Partners"];
const company = ["About", "Carrers", "Press", "Blog"];
const help = [
  "FAQ & Support",
  "Platform Status",
  "Criptionary",
  "Pricing",
  "Legal",
];
const social = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

const itemP = products.map(item => {
  return <li key={item}>{item}</li>;
});
const itemC = company.map(item => {
  return <li key={item}>{item}</li>;
});
const itemH = help.map(item => {
  return <li key={item}>{item}</li>;
});
const itemS = social.map(item => {
  return <li key={item}>{item}</li>;
});

function Footer() {
  return (
    <div className="footer">
      <Container>
        <hr />

        <Row>
          <Col>
            <img
              src={require("../../assets/images/small-logo.svg")}
              alt="uphold"
            />
          </Col>
          <Col>
            <ul>
              <li className="mb-4">
                <strong>Products</strong>
              </li>
              {itemP}
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="mb-4">
                <strong>Company</strong>
              </li>
              {itemC}
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="mb-4">
                <strong>Help</strong>
              </li>
              {itemH}
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="mb-4">
                <strong>Social</strong>
              </li>
              {itemS}
            </ul>
          </Col>
          <Col>
            <img
              src={require("../../assets/images/appstore.svg")}
              className="mr-3 ml-4 mb-3 float-right"
              alt="appstore"
            />
            <img
              src={require("../../assets/images/playstore.svg")}
              className="mr-3 ml-4 mb-3 float-right"
              alt="playstore"
            />
            <br />
            <Form.Control
              as="select"
              readOnly
              className="ml-3 w-75 float-right"
            >
              <option>English</option>
            </Form.Control>
          </Col>
        </Row>

        <Row>
          <Col xs lg="11">
            <small>
              Uphold Europe Limited, Reg No. 09281410, Registered Office:
              Interchange Triangle, Chalk Farm Road, London, England, NW1 8AB
            </small>
            <br />
            <small>
              &copy; Uphold, Inc. 2018. All Rights Reserved.{" "}
              <u className="mr-3 ml-3">Agreements</u>{" "}
              <u className="mr-3">Privacy & Data Policy</u> <u>Cookie Policy</u>
            </small>
          </Col>
          <Col>
            <img
              className="float-right"
              src={require("../../assets/images/qr-code.svg")}
              alt="qrcode"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
