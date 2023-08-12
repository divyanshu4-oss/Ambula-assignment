import React from 'react';
import ItemCard from './ItemCard';
import data from './data';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';

export default function ShoppingCart() {
    
  return (
    <>
    <CartProvider>
    <h1 className='text-center mt-3'>All Items here</h1>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            {data.productData.map((item, index)=>{
                return(
                    <ItemCard 
                    img={item.img} 
                    title={item.title} 
                    desc={item.desc} 
                    price={item.price} 
                    item={item} 
                    key={index}
                    />
                )
            })}
        </div>
    </section>
    <Cart/>
    </CartProvider>
    </>
  )
}

