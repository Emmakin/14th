import React from 'react';

function Button() {
    return (
      <div>
        <button style={style.Btn}>Shop All Fleece</button>
      </div>
    );
  }
const style = {
    Btn: {
        backgroundColor: "black",
        borderRadius: "2rem",
        padding: "6px 20px",
        color: "white",
        margin: "6px 6px 0px 0px",
        font: "16px",
        fontFamily: "Helvetica Neue"
      }
}

export default Button