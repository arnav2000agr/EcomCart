import React from 'react';
const Home = ({image,name,price}) => {
    return (
        <div className="product_container">
            <div>
            <p>{image}</p>
            <p>{name}</p>
            <p>{price}</p>
            <button type="button" >Add Item
            </button>
            </div>
        </div>
    )}
    export default Home;
