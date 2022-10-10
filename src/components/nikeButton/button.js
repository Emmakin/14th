import React from 'react';
import Style from './button.module.css';

function Button({name}) {
    return (
      <div>
        <button className = {Style.btn}>{name}</button>
      </div>
    );
  }


export default Button;