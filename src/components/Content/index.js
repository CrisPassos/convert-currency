import React, { useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Select from "../../components/Select";
import CurrencyFormat from 'react-currency-format';
import http from "../../utils/config/http";

import { TARGETS } from "../../utils/constants/targets";

import "./styles.scss";

function Content() {
  const [currencies, setCurrencies] = useState([]);
  const [value, setValue] = useState("");

  const handleSelect = e => {
      getTicker(value, e);
  }

  async function getTicker(currValue, country = "USD") {
    setValue(currValue);

    const targetValues = [];
    const targetCountries = getPair(country)
   
    try {
      const response = await http.getTicker(country);
      sessionStorage.setItem("data", JSON.stringify(response));

      response.forEach(item => {
        if (targetCountries.includes(item.pair)) {
          targetValues.push(item.bid * currValue);
        }
      });

      setCurrencies(targetValues);
    } catch (error) {
      alert(error);
    }
  }

  const getPair = (country) => {
    TARGETS.forEach((item, index) => {
      if(item.name === country) {
        TARGETS.splice(index, 1);
      }
    });

    return TARGETS.map(item => {
      return `${country}${item.name}`;
    });
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
    <>
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

            <CurrencyFormat thousandSeparator={true} className="input-number mt-3 w-50" onValueChange={(e) => getTicker(e.value)}/>
            {/* <Form.Control type="number" className="input-number mt-2 w-50" onChange={e => getTicker(e.target.value)} value={value}  /> */}
            <Select onChange={e => handleSelect(e.value) } />
            </div>
          </Col>
          <Col />
        </Row>
        <Row md={3}>
          { currencies.length !== 0 ? 
            <>
              <Col/>
              <Col>
                <ul className="float-left mt-2 mr-5 pl-0">{convertValue}</ul>
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
    </>
  );
}

export default Content;
