import React from 'react';
import Style from '../styles/shop.module.css'
import ItemCard from '../components/shopComponent/itemCard';
import data from '../data';

const Shop = () => {
  return (
    <div>
      <h1>All Items</h1>
      <div className={Style.card}>
        {data.product.map((item,index) => {
          return (
            <div >
            <ItemCard 
            img={item.img}
            name={item.name}
            category={item.category}
            tag={item.tag} 
            key={index}
            />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Shop;