import React from 'react'
import { Whitebutton } from '../../nikeButton/whitebutton'

import Styles from './NikeMembership.module.css'

export const NikeMembership = (props) => {
  return (
    <div className={Styles.wrapper}>
        <img src={props.src} alt={props.alt} className={Styles.img} />
        <div className={Styles.title}>{props.title}</div>
        <div className={Styles.text}>{props.text}</div>
        <div><Whitebutton name="Join us" /></div>
    </div>
  )
}
