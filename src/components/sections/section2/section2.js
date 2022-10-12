import React from 'react'
import Styles from './section2.module.css'

export const Section2 = (props) => {
  return (
    <div className={Styles.wrapper}>
        <img src={props.src} alt={props.alt}  className={Styles.pic} />
        <div className={Styles.content}>
        <div className={Styles.tag}>{props.tag}</div>
        <div className={Styles.text}>{props.text}</div>
        </div>
    </div>
  )
}
