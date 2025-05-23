import React, { useState } from 'react';
import product from "./products.json"
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(product);
  const [value, setValue] = useState("");

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count > 0 ? count - 1 : 0);
  }

  function low() {
    const sorted = [...items].sort((a, b) => a.price - b.price);
    setItems(sorted);
  }

  function high() {
    const sorted = [...items].sort((a, b) => b.price - a.price);
    setItems(sorted);
  }

  return (
    <div className="container">
      <input
        className="search"
        placeholder="Search any product"
        onChange={(e) => setValue(e.target.value.toLowerCase())}
      />

      <div className="actions">
        <button onClick={low}>Low-to-High Price</button>
        <button onClick={high}>High-to-Low Price</button>
        <button className="cart">🛒 Cart: {count}</button>
      </div>

      <div className="products">
        {items
          .filter((e) => e.title.toLowerCase().includes(value))
          .map((e, index) => (
            <div className="card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={e.image} alt={e.title} />
                  <p>{e.title}</p>
                </div>
                <div className="card-back">
                  <p><strong>ID:</strong> {e.id}</p>
                  <p><strong>Price:</strong> ${e.price}</p>
                  <p><strong>Description:</strong> {e.description.substring(0, 60)}...</p>
                  <p><strong>Category:</strong> {e.category}</p>
                  <div className="buttons">
                    <button onClick={add}>AddCart 🛒</button>
                    <button onClick={sub}>RemoveCart 🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
