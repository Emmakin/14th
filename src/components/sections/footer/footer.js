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
        <ul className={Styles.div}>
            <li className={Styles.ul_caps}><a>GET HELP</a></li>
            <li><a>Order Status</a></li>
            <li><a>Shipping and Delivery</a></li>
            <li><a>Returns</a></li>
            <li><a>Payment Options</a></li>
            <li><a>Oil Card Balance</a></li>
            <li><a>Contact Us</a></li>
        </ul>
        <ul className={Styles.div}>
            <li className={Styles.ul_caps}><a>ABOUT NIKE</a></li>
            <li><a>Order Status</a></li>
            <li><a>Shipping and Delivery</a></li>
            <li><a>Returns</a></li>
            <li><a>Payment Options</a></li>
            <li><a>Oil Card Balance</a></li>
            <li><a>Contact Us</a></li>
        </ul>
    </div>
  )
}
