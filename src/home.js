// Home.js

import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 29.99,
      imageUrl: 'https://shipkar.co.in/shop/wp-content/uploads/2022/12/corrugated-box.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 39.99,
      imageUrl: 'https://finbraine.com/wp-content/uploads/2019/11/wooden_chair-1.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 49.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF5v4ebTYMjtwUX0gC00hhoD322Rk9FREm0UDzys-Lg&s',
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header__logo">Foreign Trading System</div>
        <nav className="header__nav">
          <Link to="/post">Post</Link>
          <Link to="/trading_policy">Trading Policy</Link>
          {/* Add more navigation links as needed */}
        </nav>
      </header>

      {/* Main content */}
      <main className="main">
        {/* Hero section */}
        <section className="hero-section">
          <div className="hero-text">
            <h1>Welcome Traders</h1>
            <p>Trade millions of goods</p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.imageUrl} alt={product.title} className="product__image" />
                <div className="product__info">
                  <p className="product__title">{product.title}</p>
                  <p className="product__price">${product.price}</p>
                  <Link to="/modify">Modify</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
