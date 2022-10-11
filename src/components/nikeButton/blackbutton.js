import React from 'react';
import Style from './blackbutton.module.css';

function Blkbutton({name}) {
    return (
      <div>
        <button className={Style.btn}>
          {name}
          </button>
      </div>
    );
  }


export default Blkbutton;