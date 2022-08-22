import React from "react";

const Products = ({products}) => {

    return (
        <>
        {
            <section className="main-card--cointainer">
            {
                products.map((curElem) => {
                    const { itemId , itemName , itemDescription , itemURL, itemPrice, itemAvailability } = curElem;
                    return (
                        <>
                            <div className='card-container' key = {itemId}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{itemId} </span>
                                        <span className='card-author subtle'>{itemPrice}</span>
                                        <h2 className='card-title'>{itemName}</h2>
                                        <span className='card-description subtle'>{itemDescription}</span>
                                        <div className='card-read'>{itemAvailability}</div>
                                    </div>
                                    <img src={itemURL} alt="images" className='card-media'/>
                                    <span className = 'card-tag subtle' >Order Now</span>
                                </div>
                            </div>
                        </>
                    );
            })}
            </section>
        }
        </>
        )
}

export default Products;
