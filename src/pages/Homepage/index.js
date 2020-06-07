import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";

import http from "../../utils/config/http";

import { TARGETS } from "../../utils/constants/targets";

function HomePage() {
  const [currencies, setCurrencies] = useState([]);
  const [valueConvert, setValueConvert] = useState("");

  async function getSelection(e) {
    await getTicker(e.value);
  }

  function getValue(e) {
    setValueConvert(e.target.value);
  }

  async function getTicker(data) {
    try {
      const response = await http.getTicker(data);

      const targetValues = [];

      const targetCountries = TARGETS.map(item => {
        return `${data}${item.name}`;
      });

      response.forEach(item => {
        if (targetCountries.includes(item.pair)) {
          targetValues.push(item.bid * valueConvert);
        }
      });

      setCurrencies(targetValues);
    } catch (error) {
      console.log(error);
    }
  }

  const targetValue = TARGETS.map(item => {
    return (
      <li key={item.name}>
        <img src={item.image} alt={item.name} />
        <span>{item.name}</span>
      </li>
    );
  });

  const convertValue = currencies.map(item => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div>
      <Header />
      <Container>
        <Row md={3}>
          <Col>
            <Form.Control type="number" onChange={e => getValue(e)} />
            {/* <CurrencyFormat thousandSeparator={true} onValueChange={(e) => console.log(e)}/> */}
          </Col>
          <Col>
            <Select onChange={e => getSelection(e)} />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col>
            <ul>{convertValue}</ul>
          </Col>
          <Col>
            <ul>{targetValue}</ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
