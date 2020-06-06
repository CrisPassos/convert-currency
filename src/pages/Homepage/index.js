import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";

function HomePage() {
  const [currency, setCurrency] = useState([]);

  useEffect(
    () => {
      setCurrency("testes");
      console.log(currency);
    },
    [currency]
  );

  function getSelection(e) {
    console.log(e);
  }

  return (
    <div>
      <Header />
      <div>
        <Select onChange={getSelection} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
