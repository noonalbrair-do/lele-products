import React, { useState } from "react";
import "./index.css";

function App() {
  const products = [
    { id: 1, name: "Hair Oils", price: 150 },
    { id: 2, name: "Hair Creams", price: 180 },
    { id: 3, name: "Hair Perfume", price: 100 },
    { id: 4, name: "Body Scrub", price: 150 },
    { id: 5, name: "Body Oil", price: 140 },
  ];

  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => setCheckout(true);

  const handleOrderSubmit = () => {
    const orderDetails = cart.map(item => `${item.name} x${item.qty}`).join(", ");
    const message = `Order from ${customer.name}, Phone: ${customer.phone}, Address: ${customer.address}. Items: ${orderDetails}`;
    window.open(`https://wa.me/201118049493?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (checkout) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Checkout</h1>
        <label>Name:</label><br/>
        <input value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} /><br/>
        <label>Phone:</label><br/>
        <input value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} /><br/>
        <label>Address:</label><br/>
        <input value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} /><br/><br/>
        <button onClick={handleOrderSubmit}>Submit Order via WhatsApp</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>💋 Lele Products</h1>
        <p style={{ color: "#ff69b4" }}>Pure handmade beauty — made with love in every drop.</p>
      </header>

      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>{product.name} - {product.price} EGP</span>
          <button style={{ marginLeft: "10px" }} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty.</p>}
      {cart.map(item => (
        <div key={item.id}>
          {item.name} x{item.qty} - {item.price * item.qty} EGP
          <button style={{ marginLeft: "10px" }} onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button style={{ marginTop: "10px" }} onClick={handleCheckout}>Go to Checkout</button>}

      <footer style={{ marginTop: "40px", textAlign: "center" }}>
        <p>Instagram: <a href="https://www.instagram.com/leleproduct.s">leleproduct.s</a></p>
        <p>WhatsApp: +201118049493</p>
      </footer>
    </div>
  );
}

export default App;



