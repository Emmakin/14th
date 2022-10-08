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
        width: "50px",
        height: "50px",
        borderRadius: "2rem",
        backgroundColour: "white",
        colour: "red"
    }
    
}
export default Logo