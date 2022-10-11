import React from 'react'
import Style from './whitebutton.module.css'

export const Whitebutton = ({name}) => {
  return (
    <div>
        <button className={Style.btn}>
          {name}
          </button>
      </div>
  )
}
