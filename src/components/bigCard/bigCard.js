import React from 'react'
import pic1 from "../../nike asset/nike-just-do-it3.jpg"

function Imagediv({text, button}) {
  return (
    <div style={style.mainPic}>
        <img src={pic1} alt="nike pictures" ></img>
        <div style={style.text}>{text}</div>
        <button style={style.btn}>{button}</button>
    </div>
 )
}


const style = {
    mainPic: {
        position: "relative",

    },
    text: {
        position: "absolute",
        left: "50px",
        bottom: "150px",
        fontSize: "24px",
        color: "white"
    },
    btn: {
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "30px",
        padding: "6px 40px",
        color: "black",
        margin: "6px 6px 0px 0px",
        font: "16px",
        fontFamily: "Helvetica Neue",
        fontHeight: "80px",
        fontWeight: "100px",
        position: "absolute",
        left: "50px",
        bottom: "75px",
        border: "none",
        width:"100px",
        height: "40px"
    }
}
export default Imagediv

