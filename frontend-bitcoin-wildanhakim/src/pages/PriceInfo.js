import React, { useState, useEffect } from "react";

function PriceInfo() {
  const [cashCurrency, setCashCurrency] = useState([]);
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
        setCashCurrency([data.AUD, data.EUR, data.GBP, data.JPY, data.USD]);
      });
  }, []);
  const getName = (value) => {
    return value === 0
      ? "Dollar Australia"
      : value === 1
      ? "Euro Eropa"
      : value === 2
      ? "Poundsterling Inggris"
      : value === 3
      ? "Yen Jepang"
      : value === 4
      ? "Dollar Amerika"
      : "Mata Uang tidak ditemukan";
  };

  return (
    <div>
      <h1>Harga Bitcoin Hari Ini</h1>
      <table>
        <thead>
          <tr>
            <th>Mata Uang</th>
            <th>Harga Beli Bitcoin</th>
            <th>Harga Jual Bitcoin</th>
          </tr>
        </thead>
        <tbody>
          {cashCurrency.map((value, index) => {
            console.log(value);
            return (
              <tr key={index}>
                <td>{getName(index)}</td>
                <td>{value.buy}</td>
                <td>{value.sell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PriceInfo;
