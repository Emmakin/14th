import React from 'react'
import pic1 from './nike asset/nike-just-do-it2.jpg'

function Imagediv({text, button}) {
  return (
    <div>
        <img src={pic1} alt="tennis rock star" style={style.mainPic}>
            <div style={style.text}>{text}</div>
        </img>
        
    </div>
 
  )
}
const style = {
    mainPic: {
        position: "relative",

    },
    text: {
        position: "absolute",
        
    }
}

export default Imagediv
