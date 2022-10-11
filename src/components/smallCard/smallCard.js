import React from "react";
import Styles from "./smallCard.module.css"


export const SmallCard = (props) => {
  return (
    <div className={Styles.wrapper}>
        <img src={props.src} alt={props.alt} className={Styles.img} />
        <div className={Styles.brandName}>{props.brandName}</div>
        <div className={Styles.productName}>{props.productName}</div>
        <div className={Styles.productType}>{props.productType}</div>
        <div className={Styles.productPrice}>{props.productPrice}</div>
    </div>
  )
}
