import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.fonearena.com/blog/wp-content/uploads/2021/09/iPhone-13-Pro-and-iPhone-13-Pro-Max-1024x925.jpg" alt="Product Name " />
            <div className="product__info">
                <p className="info__name">Iphone 13</p>
                <p className="info__description">
                    We could take it slower Wait until we're older But I might be somebody You might not even know her 
                    I'm going through changes It's a roller-coaster But I might be somebody You might not even know her
                </p>
                <p className="info__price">$99.99</p>
                <Link to={`/product/${1111}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    );
};

export default Product;
