import React from 'react'
import Styles from './section3.module.css'

export const Section3 = () => {
  return (
    <div className={Styles.wrapper}>
      <div>
        <ul>
          <li>Featured</li>
          <li><a>AirForce 1</a></li>
          <li><a>Jordan 1</a></li>
          <li><a>Air Max 2090</a></li>
         <li><a>Air Max 201</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Shoes</li>
          <li><a>All Shoes</a></li>
          <li><a>Jordan Shoes</a></li>
          <li><a>Running Shoes</a></li>
         <li><a>Basketball Shoes</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Clothing</li>
          <li><a>All Clothing</a></li>
          <li><a>Top & Tshirts</a></li>
          <li><a>Shorts</a></li>
         <li><a>Hoodies and pull over</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Kid's</li>
          <li><a>Infant and Toodlers Shoes</a></li>
          <li><a>Kid's Shoes</a></li>
          <li><a>Kid's Basketball Shoes</a></li>
         <li><a>Kid's Running Shoes</a></li>
        </ul>
      </div>
      
    </div>
  )
}
