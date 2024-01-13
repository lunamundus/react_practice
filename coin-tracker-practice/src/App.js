import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [getCoinValue, setGetCoinValue] = useState(0);
  const [getCoin, setGetCoin] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
  };

  const onClick = () => {
    setGetCoin((money / getCoinValue).toFixed(2));
  };

  const onSelect = (event) => {
    setGetCoinValue(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): $ {coin.quotes.USD.price.toFixed(2)}{" "}
              USD
            </option>
          ))}
        </select>
      )}

      <hr />

      <div>
        <input
          value={money}
          placeholder="Write your money...(USD)"
          type="number"
          onChange={onChange}
        />
        <button onClick={onClick}>Convert</button>
      </div>

      <div>{getCoin}</div>
    </div>
  );
}

export default App;
