import React from 'react'
import Styles from './section.module.css'

export const Section = (props) => {
  return (
    <div>
        <img src={props.src} alt={props.alt} className={Styles.pic} />
        <div className={Styles.name}>{props.name}</div>
    </div>
  )
}

