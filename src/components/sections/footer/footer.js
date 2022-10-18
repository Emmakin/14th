import React from 'react'
import Styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={Styles.footer}>
        <ul className={Styles.ul_caps}>
            <li><a>gifts card</a></li>
            <li><a>promotions</a></li>
            <li><a>find a store</a></li>
            <li><a>sign up a email</a></li>
            <li><a>become a member</a></li>
            <li><a>nike journal</a></li>
            <li><a>nike journal</a></li>
            <li><a>send up feedback</a></li>
        </ul>
    </div>
  )
}
