import "./ProductScreen.css";

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="ProductScreen__left">
                <div className="left__image">
                    <img src="https://images.fonearena.com/blog/wp-content/uploads/2021/09/iPhone-13-Pro-and-iPhone-13-Pro-Max-1024x925.jpg" alt="Product Name " />
                </div>

                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price : $99.9</p>
                    <p>
                        Description : We could take it slower Wait until we're older But I might be somebody You might not even know her 
                        I'm going through changes It's a roller-coaster But I might be somebody You might not even know her
                    </p>
                </div>
            </div>
            <div className="ProductScreen__right">
                <div className="right__info">
                    <p>
                        Price : <span>$99.9</span>
                    </p>
                    <p>
                        Status : <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductScreen;
