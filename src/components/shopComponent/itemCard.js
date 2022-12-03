import React from 'react';
import Style from './itemCard.module.css'

const ItemCard = (props) => {
    return (
        <div className={Style.wrapper}>
            <img className={Style.img} src={props.img} />
            <div className={Style.name}>{props.name}</div>
            <div className={Style.price}>{props.price}</div>
            <div className={Style.category}>{props.category}</div>
            <div className={Style.tag}>{props.tag}</div>
            <button>Add to Cart</button>
        </div>
    );
};

export default ItemCard;