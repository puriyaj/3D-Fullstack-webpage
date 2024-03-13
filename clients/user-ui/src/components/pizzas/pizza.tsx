import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { title } from 'process'

const List = [
  {
    title: "xl Hot",
    imgUrl: "/pizzas/mar.png",
    Ingredients: 'Tomato sauce Mozzarella cheese, shredded meat toppings ',
    Important :{
      one: 'meat',
      two: 'big',
      three: 'cheese',
      four: '',
    }
  },
  {
    title: "sucuk",
    imgUrl: "/pizzas/sucuk.png",
    Ingredients: 'Tomato sauce Mozzarella cheese, shredded meat toppings ',
    Important :{
      one: 'meat',
      two: 'big',
      three: '',
      four: '2x Spicy',
    }
  },
  {
    title: "Meat ",
    imgUrl: "/pizzas/pizza.png",
    Ingredients: 'Tomato sauce Mozzarella cheese, shredded meat toppings ',
    Important :{
      one: 'meat',
      two: 'big',
      three: 'cheese',
      four: 'Spicy',
    }
  },
  {
    title: "Vegan Party",
    imgUrl: "/pizzas/vegan.png",
    Ingredients: 'Tomato sauce Mozzarella cheese, shredded meat toppings ',
    Important :{
      one: 'vegan',
      two: 'medium',
      three: 'cheese',
      four: '',
    }
  }
]
function PizzaList() {
  return (
    <>

    <div className="flex flex-row  gap-10 justify-center w-full flex-wrap md:flex-nowrap overflow-hidden">
      {List.map((item,index) => {
        return(
      <>
      <div key={index} className="flex flex-col w-[10rem] ">
     <Image src={item.imgUrl} width={300} height={300} alt="asb website" className="rounded-lg "/>
     <h1 className="text-xl p-3">{item.title}</h1>
     <p className="dark:text-gray-100 text-gray-200">{item.Ingredients}</p>

     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-amber-900  px-2.5 py-0.5 text-xs text-gray-100 ">{item.Important.one}</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 px-2.5 py-0.5 text-xs">{item.Important.two}</li>
      <li className={`${item.Important.three ? 'bg-yellow-300': 'hidden'} whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs text-gray-400 `}>{item.Important.three}</li>
      <li className={`${item.Important.four ? 'bg-red-500': 'hidden'} whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs text-gray-400 `}>{item.Important.four}</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-center justify-center pt-3 text-slate-50 w-full" href="https://asbdavani.app">Bake Me</a>


    
  </div>
      </>
       )
      }
      )}
  
  </div>
    </>
  )
}

export default PizzaList