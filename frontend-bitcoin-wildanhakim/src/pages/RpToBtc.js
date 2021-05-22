import React, { useState, useEffect } from "react";

export default function RpToBtc() {
  const [bitcoin, setBitcoin] = useState(0);
  const [rupiah, setRupiah] = useState(0);
  const [query, setQuery] = useState(0);

  useEffect(() => {
    fetch(`https://blockchain.info/tobtc?currency=USD&value=${query}`).then(
      (response) =>
        response.json().then((data) => {
          console.log(data);
          setBitcoin(data);
        })
    );
  }, [query]);

  const handleChange = (event) => {
    let value = event.target.value;
    setRupiah(value);
    setQuery(value / 14000);
  };

  return (
    <div>
      <h1>Konversi Rupiah ke Bitcoin</h1>
      <p>Kurs 1 USD = 14000 IDR</p>
      <input type="number" onChange={handleChange} min="0" />
      <h2>
        Rp{rupiah} = BTC {bitcoin}
      </h2>
    </div>
  );
}
