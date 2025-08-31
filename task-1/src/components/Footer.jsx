import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 NZHC. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>

        {/* Mini Cart Section */}
        <div className="footer-cart">
          <h3>Order Now</h3>

          {/* Quantity Selector */}
          <div className="quantity">
            <button onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>

          {/* Rating */}
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "filled-star" : "empty-star"}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;