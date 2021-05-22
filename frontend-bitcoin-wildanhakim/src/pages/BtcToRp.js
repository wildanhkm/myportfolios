import React, { useState, useEffect } from "react";

export default function BtcToRp() {
  const [bitcoin, setBitcoin] = useState(0);
  const [rupiah, setRupiah] = useState(0);
  const [usd, setUsd] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch("https://blockchain.info/ticker")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        console.log(data.USD.last);
        setUsd(data.USD.last);
      });
  }, []);

  useEffect(() => {
    fetch(`https://blockchain.info/tobtc?currency=USD&value=${usd}`).then(
      (response) =>
        response.json().then((data) => {
          console.log(data);
          setResult(usd * 14000);
          console.log(result);
        })
    );
  }, [bitcoin]);

  const handleChange = (event) => {
    let value = event.target.value;
    setBitcoin(value);
    setRupiah(result * value);
  };

  return (
    <div>
      <h1>Konversi Bitcoin ke Rupiah</h1>
      <p>Kurs 1 USD = 14000 IDR</p>
      <input type="number" onChange={handleChange} min="0" />
      <h2>
        BTC {bitcoin} = Rp{rupiah}
      </h2>
    </div>
  );
}
