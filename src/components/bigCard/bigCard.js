import React from 'react';
import pic1 from "../../nike asset/nike-just-do-it4.jpg";
import Styles from "./bigCard.module.css";

function Imagediv({text, button}) {
  return (
    <div  className={Styles.mainPic}>
        <img src={pic1} alt="nike pictures" ></img>
        <div  className={Styles.text}>{text}</div>
        <button  className={Styles.btn}>{button}</button>
    </div>
 )
}


export default Imagediv

