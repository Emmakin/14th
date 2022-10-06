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
        backGround: "black",
        borderRadius: "2rem",
        padding: "6px 6px 0px 0px",
        
      }
}

export default Button