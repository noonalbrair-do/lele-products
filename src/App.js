import React from "react";
import "./index.css";

function App() {
  const products = [
    { name: "Hair Oils", description: "Nourishing oils for healthy hair." },
    { name: "Hair Creams", description: "Moisturizing and styling creams." },
    { name: "Hair Perfume", description: "Fragrant hair mists." },
    { name: "Body Scrub", description: "Exfoliating body scrubs." },
    { name: "Body Oil", description: "Hydrating body oils." }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2em" }}>
          <span role="img" aria-label="kiss">💋</span> Lele Products
        </h1>
        <p style={{ color: "#ff69b4", fontSize: "1.2em" }}>
          Pure handmade beauty — made with love in every drop.
        </p>
      </header>

      <main>
        {products.map((product, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2 style={{ margin: "5px 0" }}>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </main>

      <footer style={{ marginTop: "40px", textAlign: "center" }}>
        <p>Instagram: <a href="https://www.instagram.com/leleproduct.s">leleproduct.s</a></p>
        <p>WhatsApp: +201118049493</p>
      </footer>
    </div>
  );
}

export default App;
