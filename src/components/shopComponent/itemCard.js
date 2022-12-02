import React from 'react';

const itemCard = () => {
    return (
        <div>
            <img src={props.img} />
            <div>{props.}</div>
            <div>{props.title}</div>
            <div>{props.title}</div>
            <div>{props.title}</div>
        </div>
    );
};

export default itemCard;