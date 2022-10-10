import React from 'react';
import Styles from "./bigCard.module.css";

function Imagediv({src, alt, text, button}) {
  return (
    <div  className={Styles.mainPic}>
        <img src={src} alt={alt} />
        <div  className={Styles.text}>{text}</div>
        <button  className={Styles.btn}>{button}</button>
    </div>
 )
}


export default Imagediv

