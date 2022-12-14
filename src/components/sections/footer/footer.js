import React from 'react'
import Styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerTop}>
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
            <li><a>News </a></li>
            <li><a>Career</a></li>
            <li><a>Investors</a></li>
            <li><a>Purpose</a></li>
            <li><a>Sustainability</a></li>
        </ul>
      </div>
      <div className={Styles.buttFooter}>
        <div>
          <ul className={Styles.location}>
            <li><a>United States </a></li>
            <li><a>©2022 Nike, Inc. All Rights Reserved</a></li>
          </ul>
        </div>
        <div >
          <ul className={Styles.info}>
            <li><a> Guides</a></li>
            <li><a>Terms of Sales</a></li>
            <li><a>Terms of Use</a></li>
            <li><a>Nike Privacy Policy</a></li>
            <li><a>CA Supply Chains Act</a></li>
          </ul>
        </div>
      </div>
        
    </div>
  )
}
