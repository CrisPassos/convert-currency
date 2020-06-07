import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";

import { TARGETS } from "../../utils/constants/targets";

import { requestCurrency } from "./actions";

function HomePage() {
  const dispatch = useDispatch();

  const [currenciesValue, setCurrenciesValue] = useState([]);
  const [valueConvert, setValueConvert] = useState("");

  const { currency } = useSelector(state => state.currency);

  useEffect(() => {
    setCurrenciesValue([
      "0.11",
      "0.22",
      "0.33",
      "0.44",
      "0.55",
      "0.66",
      "0.77",
      "0.88",
    ]);
  }, []);

  function getSelection(e) {
    dispatch(requestCurrency(e.value));

    console.log(currency);
  }

  function getValue(e) {
    console.log(e.target.value);
    setValueConvert(e.target.value);
    console.log(valueConvert);
  }

  const targetValue = TARGETS.map(item => {
    return (
      <li key={item.name}>
        <img src={item.image} alt={item.name} />
        <span>{item.name}</span>
      </li>
    );
  });

  const convertValue = currenciesValue.map(item => {
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
