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

  async function getTicker(country = "USD") {
    const targetValues = [];

    const targetCountries = TARGETS.map(item => {
      return `${country}${item.name}`;
    });

    try {
      const response = await http.getTicker(country);
      sessionStorage.setItem("data", JSON.stringify(response));

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
      <li key={item.name} className="mb-3">
        <img src={item.image} alt={item.name} className="size-image" />
        <span className="ml-3">{item.name}</span>
      </li>
    );
  });

  const convertValue = currencies.map((item, index) => {
    return (
      <li key={index} className="mt-3">
        <span>{item}</span>
      </li>
    );
  });



  return (
    <div>
      <Header />
      <Container>
        <Row md={3}>
          <Col />
          <Col>
            <h1 className="text-center">Currency Converter</h1>
          </Col>
        </Row>

        <Row md={3}>
          <Col />
          <Col>
            <p className="text-center">
              Receive competitive and transparent pricing with no hidden
              spreads. See how to compare.
            </p>
          </Col>
        </Row>

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
        <Row md={3}>
          { currencies.length !== 0 ? 
            <>
              <Col>
                <ul className="float-right mt-2">{convertValue}</ul>
              </Col>
              <Col>
                <ul className="float-right mt-3">{targetValue}</ul>
              </Col>
            </>
           : 
            <>
              <Col />
              <Col> <p className="text-center mt-3">Enter an amount to check the rates.</p> </Col>
            </>
          }
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
