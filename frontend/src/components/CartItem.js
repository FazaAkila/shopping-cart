import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://images.fonearena.com/blog/wp-content/uploads/2021/09/iPhone-13-Pro-and-iPhone-13-Pro-Max-1024x925.jpg" alt="Product Item " />
            </div>
            <Link to={`/product/${111}`} className="cartitem__name">
                <p>Product 1</p>
            </Link>
            <p className="cartitem__price">$99.9</p>
            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <button className="cartitem__deleteBtn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem;
