import React from 'react'
// import Vector1 from '../nike asset/vector.svg'

function Logo() {
    return (
        <div>
            {/* <img src={Vector1} alt="nike pictures" width="25px" height="25px"></img> */}
            <div style={style.box}>SNEAKERS</div>
        </div>
    )
}

const style = {
    box: {
        width: "100px",
        height: "100px",
        borderRadius: "2rem",
        backgroundColour: "white",
        colour: "red",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
    }
    
}
export default Logo