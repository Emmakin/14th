import React from 'react';

function Button({name}) {
    return (
      <div>
        <button style={style.Btn}>{name}</button>
      </div>
    );
  }
const style = {
    Btn: {
        backgroundColor: "black",
        borderRadius: "30px",
        padding: "6px 30px",
        color: "white",
        margin: "6px 6px 0px 0px",
        font: "30px",
        fontFamily: "Arial",
        width:"200px",
        height: "40px"
      }
}

export default Button