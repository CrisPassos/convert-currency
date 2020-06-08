import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";

import http from "../../utils/config/http";

import "./styles.scss";

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
            <h1 className="text-center h2">Currency Converter</h1>
          </Col>
        </Row>

        <Row md={3}>
          <Col />
          <Col>
            <p className="text-center mt-3 mb-5 font-size">
              Receive competitive and transparent pricing with no hidden
              spreads. See how to compare.
            </p>
          </Col>
        </Row>

        <Row md={3}>
          <Col/>
          <Col>
            <div className="background">
            <Form.Control type="number" className="input-number mt-2 w-50" onChange={e => getValue(e)} />
            <Select onChange={e => getSelection(e)} />
            </div>
            {/* <CurrencyFormat thousandSeparator={true} onValueChange={(e) => console.log(e)}/> */}
          </Col>
          <Col />
        </Row>
        <Row md={3}>
          { currencies.length !== 0 ? 
            <>
              <Col/>
              <Col>
                <ul className="float-left mt-2 mr-5">{convertValue}</ul>
                <ul className="float-rigth mt-3">{targetValue}</ul>
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
