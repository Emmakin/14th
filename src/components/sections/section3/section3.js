import React from 'react'
import Styles from './section3.module.css'

export const Section3 = () => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <ul>
          <li className={Styles.head}>Featured</li>
          <li><a className={Styles.link}  href="https://#.com">AirForce 1</a></li>
          <li><a className={Styles.link} href="https://#.com">Jordan 1</a></li>
          <li><a className={Styles.link} href="https://#.com">Air Max 2090</a></li>
         <li><a className={Styles.link} href="https://#.com">Air Max 201</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className={Styles.head}>Shoes</li>
          <li><a className={Styles.link} href="https://#.com">All Shoes</a></li>
          <li><a className={Styles.link} href="https://#.com">Jordan Shoes</a></li>
          <li><a className={Styles.link} href="https://#.com">Running Shoes</a></li>
         <li><a className={Styles.link} href="https://#.com">Basketball Shoes</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className={Styles.head}>Clothing</li>
          <li><a className={Styles.link} href="https://#.com">All Clothing</a></li>
          <li><a className={Styles.link} href="https://#.com">Top & Tshirts</a></li>
          <li><a className={Styles.link} href="https://#.com">Shorts</a></li>
         <li><a className={Styles.link} href="https://#.com">Hoodies and pull over</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className={Styles.head}>Kid's</li>
          <li><a className={Styles.link} href="https://#.com">Infant and Toodlers Shoes</a></li>
          <li><a className={Styles.link} href="https://#.com">Kid's Shoes</a></li>
          <li><a className={Styles.link} href="https://#.com">Kid's Basketball Shoes</a></li>
         <li><a className={Styles.link} href="https://#.com">Kid's Running Shoes</a></li>
        </ul>
      </div>
      
    </div>
  )
}
