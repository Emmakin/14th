import React from 'react';
import Style from './itemCard.module.css'

const itemCard = () => {
    return (
        <div>
            <img src={props.img} />
            <div className={Style.name}>{props.name}</div>
            <div>{props.price}</div>
            <div>{props.category}</div>
            <div>{props.tag}</div>
            <button>Add to Cart</button>
        </div>
    );
};

export default itemCard;