import React from 'react';
import ItemCard from '../components/shopComponent/itemCard';
import data from '../data';

const Shop = () => {
  return (
    <div>
      <h1>All Items</h1>
      <div>
        {data.product.map((item,index) => {
          return (
            <ItemCard 
            img={item.img}
            name={item.name}
            category={item.category}
            tag={item.tag} 
            key={index}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Shop;