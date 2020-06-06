import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function HomePage() {
  const [currency, setCurrency] = useState([]);

  useEffect(
    () => {
      setCurrency("testes");
      console.log(currency);
    },
    [currency]
  );

  return (
    <div>
      <Header />
      <p>MIDDLE</p>
      <Footer />
    </div>
  );
}

export default HomePage;
