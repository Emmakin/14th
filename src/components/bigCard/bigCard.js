import React from 'react';
import Styles from "./bigCard.module.css";
import { Whitebutton } from '../nikeButton/whitebutton';

function Imagediv({src, alt, text}) {
  return (
    <div  className={Styles.mainPic}>
        <img src={src} alt={alt}  />
        <div  className={Styles.text}>{text}</div>
        <div className={Styles.btn}>
          <Whitebutton 
            name ="Shop"
          />
        </div>
    </div>
 )
}


export default Imagediv

