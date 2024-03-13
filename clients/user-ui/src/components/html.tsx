import React from 'react'
import Image from 'next/image'
import PizzaList from './pizzas/pizza'
import SauceList from './pizzas/sauce'
function Html() {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '20vh',
          left: '20vw',
          transform: 'translateX(-50%)',
          color: '#292828'
        }}>
         <div className={` flex flex-col gap-3  p-3 `}>
          <h1 className="font-bold text-indigo-100 text-4xl">Order your favarite Pizza!</h1>
           <h2 className="font-bold text-indigo-100 text-2xl">Savor the Flavor!</h2>
          
         <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg  shadow-lg w-fit p-2 shadow-indigo-500/50">Order Now!</button>
        </div>
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '90vh',
          left: '60vw',
          transform: 'translateX(-65%)',
         
        }}>
          
       
          <PizzaList/>
          <div className='pt-3 hidden md:flex'>
            <PizzaList/>
          </div>
          
           
      </h1>

      
     
    </>
  )
}

export { Html }

