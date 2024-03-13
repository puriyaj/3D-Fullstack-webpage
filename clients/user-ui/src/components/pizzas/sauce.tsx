import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { title } from 'process'

const List = [
  {
    title: "Ketchab",
    imgUrl: "/pizzas/red1.png",
    Ingredients: '',
    Important :{
      four: '',
    }
  },
  {
    title: "BBQ",
    imgUrl: "/pizzas/red.png",
    Ingredients: '',
    Important :{

      four: 'Spicy',
    }
  },
 
]
function SauceList() {
  return (
    <>
    <div className="flex flex-row  gap-10 justify-center w-full flex-wrap md:flex-nowrap">
      {List.map((item,index) => {
        return(
      <>
      <div key={index} className="flex flex-col w-[10rem]">
     <Image src={item.imgUrl} width={300} height={300} alt="asb website" className="rounded-lg "/>
     <h1 className="text-xl p-3">{item.title}</h1>
     <p className="dark:text-gray-300 text-gray-700">{item.Ingredients}</p>

     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      
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

export default SauceList