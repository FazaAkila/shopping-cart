import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <img scr="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Product Name " />
            <div className="product__info">
                <p className="info__name">Iphone X</p>
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
