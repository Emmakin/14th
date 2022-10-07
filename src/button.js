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
        padding: "6px 20px",
        color: "white",
        margin: "6px 6px 0px 0px",
        font: "16px",
        fontFamily: "Helvetica Neue"
      }
}

export default Button